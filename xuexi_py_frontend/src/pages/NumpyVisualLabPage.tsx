import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Brackets,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Copy,
  Database,
  Filter,
  Gauge,
  Grid3X3,
  Layers3,
  Move3d,
  Pause,
  Play,
  RefreshCcw,
  Shuffle,
  Sigma,
  Sparkles,
  Variable,
  X,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { AppShell } from '../components/layout/AppShell'

type Matrix = Array<Array<number | string>>

type BroadcastExample = {
  id: string
  label: string
  title: string
  summary: string
  aShape: number[]
  bShape: number[]
  a: Matrix
  b: Matrix
  expandedB: Matrix
  result?: Matrix
  compatible: boolean
  alignment: string
  verdict: string
}

type ConceptStep = {
  kicker: string
  title: string
  description: string
  code: string
  input: string[]
  output: string[]
  note: string
}

type Concept = {
  id: string
  shortTitle: string
  title: string
  description: string
  icon: LucideIcon
  accent: string
  steps: ConceptStep[]
}

const matrixA: Matrix = [[1, 2, 3], [4, 5, 6]]

const broadcastExamples: BroadcastExample[] = [
  {
    id: 'scalar',
    label: '标量 + 数组',
    title: '一个数，作用到每个元素',
    summary: '标量没有数组维度，可以和任意形状的数组逐元素运算。',
    aShape: [2, 3],
    bShape: [],
    a: matrixA,
    b: [[10]],
    expandedB: [[10, 10, 10], [10, 10, 10]],
    result: [[11, 12, 13], [14, 15, 16]],
    compatible: true,
    alignment: '(2, 3)  +  scalar',
    verdict: '标量自动应用到 6 个元素',
  },
  {
    id: 'row',
    label: '矩阵 + 行向量',
    title: '最后一维相同，按行广播',
    summary: '形状 (3,) 从右侧与 (2, 3) 对齐，相当于在左侧补一个 1。',
    aShape: [2, 3],
    bShape: [3],
    a: matrixA,
    b: [[10, 20, 30]],
    expandedB: [[10, 20, 30], [10, 20, 30]],
    result: [[11, 22, 33], [14, 25, 36]],
    compatible: true,
    alignment: '(2, 3)  +  (1, 3)',
    verdict: '第 1 维 2 ↔ 1，可复制成两行',
  },
  {
    id: 'column',
    label: '矩阵 + 列向量',
    title: '中间维度为 1，按列广播',
    summary: '列向量必须明确写成 (2, 1)，这个 1 可以扩展成 3。',
    aShape: [2, 3],
    bShape: [2, 1],
    a: matrixA,
    b: [[10], [20]],
    expandedB: [[10, 10, 10], [20, 20, 20]],
    result: [[11, 12, 13], [24, 25, 26]],
    compatible: true,
    alignment: '(2, 3)  +  (2, 1)',
    verdict: '最后一维 3 ↔ 1，可复制成三列',
  },
  {
    id: 'error',
    label: '不兼容案例',
    title: '2 和 3 冲突，广播失败',
    summary: 'NumPy 从右向左比较形状；对应维度既不相等，也没有一个是 1。',
    aShape: [2, 3],
    bShape: [2],
    a: matrixA,
    b: [[10, 20]],
    expandedB: [[10, 20]],
    compatible: false,
    alignment: '(2, 3)  +    (2,)',
    verdict: '最后一维 3 ↔ 2，不相等且都不是 1',
  },
]

const concepts: Concept[] = [
  {
    id: 'ndarray', shortTitle: '数组本体', title: 'ndarray：NumPy 的核心容器', icon: Boxes, accent: 'cyan',
    description: '先把它理解成“类型统一、带形状的多维数据块”，而不是更强的 list。',
    steps: [
      { kicker: '01 · 转换', title: '从 Python list 创建数组', description: 'np.array 会读取数据、推断统一的数据类型，并构造 ndarray。', code: 'a = np.array([1, 2, 3])', input: ['list', '1', '2', '3'], output: ['ndarray', '1', '2', '3'], note: '列表仍然是列表；NumPy 创建了一个新的数组对象。' },
      { kicker: '02 · 元数据', title: '数组同时携带形状和类型', description: 'shape 描述每个轴的长度，ndim 是轴数，dtype 是底层元素类型。', code: 'a.shape, a.ndim, a.dtype', input: ['[1, 2, 3]'], output: ['shape=(3,)', 'ndim=1', 'dtype=int64'], note: '理解 shape 是后续索引、广播和矩阵运算的基础。' },
      { kicker: '03 · 内存', title: '统一类型换来紧凑存储', description: '元素通常连续存放，底层循环可以一次处理一整块数值。', code: 'a.itemsize * a.size', input: ['3 个 Python 对象引用'], output: ['连续数值内存'], note: '这也是 NumPy 数值计算通常比 Python 循环更高效的原因之一。' },
    ],
  },
  {
    id: 'create', shortTitle: '创建数组', title: '创建：为数据准备正确的起点', icon: Database, accent: 'blue',
    description: '根据用途选择 array、arange、linspace、zeros、ones 或 full。',
    steps: [
      { kicker: '01 · 序列', title: 'arange 生成等步长序列', description: '写法接近 range，但结果直接是 ndarray。', code: 'np.arange(0, 10, 2)', input: ['start=0', 'stop=10', 'step=2'], output: ['0', '2', '4', '6', '8'], note: 'stop 不包含在结果中。' },
      { kicker: '02 · 采样', title: 'linspace 生成固定数量的点', description: '它关注“要几个点”，很适合画图和连续区间采样。', code: 'np.linspace(0, 1, 5)', input: ['0', '→', '1'], output: ['0', '.25', '.5', '.75', '1'], note: '默认同时包含起点和终点。' },
      { kicker: '03 · 占位', title: '用 shape 直接创建结构', description: 'zeros、ones 和 full 常用于初始化结果、掩码和参数。', code: 'np.zeros((2, 3))', input: ['shape=(2, 3)'], output: ['0 0 0', '0 0 0'], note: '需要时显式传 dtype，例如 dtype=np.float32。' },
    ],
  },
  {
    id: 'shape', shortTitle: '形状与轴', title: 'shape 与 axis：从哪个方向观察数据', icon: Grid3X3, accent: 'violet',
    description: '二维只是起点；AI 数据常见 batch、channel、height、width 等多个轴。',
    steps: [
      { kicker: '01 · 形状', title: '(2, 3) 表示两行三列', description: 'shape 中每个数字对应一个轴的长度，而不是数据的值。', code: 'a.shape  # (2, 3)', input: ['轴 0：2 行'], output: ['轴 1：3 列'], note: '总元素数 size = 2 × 3 = 6。' },
      { kicker: '02 · axis=0', title: '压缩行方向，留下每一列', description: '沿着轴 0 聚合，相当于垂直向下计算。', code: 'a.sum(axis=0)', input: ['1 2 3', '4 5 6'], output: ['5', '7', '9'], note: '结果 shape 从 (2, 3) 变成 (3,)。' },
      { kicker: '03 · axis=1', title: '压缩列方向，留下每一行', description: '沿着轴 1 聚合，相当于横向计算每一行。', code: 'a.sum(axis=1)', input: ['1 2 3', '4 5 6'], output: ['6', '15'], note: '记忆重点是“被指定的轴消失”，而不是死背横竖。' },
    ],
  },
  {
    id: 'index', shortTitle: '索引切片', title: '索引与切片：取出你真正需要的数据', icon: Brackets, accent: 'pink',
    description: '单个索引定位元素，切片保留区间，布尔索引按照条件选样本。',
    steps: [
      { kicker: '01 · 定位', title: '用逗号分别指定每个轴', description: 'a[1, 2] 表示轴 0 取索引 1，轴 1 取索引 2。', code: 'a[1, 2]', input: ['1 2 3', '4 5 6'], output: ['6'], note: '索引从 0 开始，所以它是第 2 行第 3 列。' },
      { kicker: '02 · 切片', title: '冒号表示保留这一轴', description: 'a[:, 1] 保留所有行，只选择索引为 1 的列。', code: 'a[:, 1]', input: ['1 [2] 3', '4 [5] 6'], output: ['2', '5'], note: '切片通常返回 view，修改时要留意是否影响原数组。' },
      { kicker: '03 · 条件', title: '布尔数组就是筛选开关', description: '条件先生成 True/False 掩码，再用掩码选出对应元素。', code: 'a[a > 3]', input: ['F F F', 'T T T'], output: ['4', '5', '6'], note: '组合条件使用 &、|、~，每个条件都要加括号。' },
    ],
  },
  {
    id: 'vectorize', shortTitle: '向量化', title: '向量化：把循环交给 NumPy', icon: Gauge, accent: 'lime',
    description: '表达“整批数据做什么”，而不是在 Python 中逐元素下指令。',
    steps: [
      { kicker: '01 · Python 循环', title: '逐个取值、计算、追加', description: '每个元素都要经过 Python 解释器的循环控制。', code: '[x * 2 for x in values]', input: ['取 1', '取 2', '取 3'], output: ['2', '4', '6'], note: '小数据完全可以这样写，清晰比盲目优化更重要。' },
      { kicker: '02 · 数组运算', title: '一次描述整批计算', description: 'ndarray 的运算符默认执行逐元素运算。', code: 'values * 2', input: ['[1, 2, 3]'], output: ['[2, 4, 6]'], note: '代码更接近数学表达式，也更容易组合。' },
      { kicker: '03 · ufunc', title: '通用函数批量执行', description: 'sqrt、exp、log 等 ufunc 能处理数组，并支持广播。', code: 'np.sqrt(values)', input: ['1', '4', '9'], output: ['1', '2', '3'], note: '避免用 np.vectorize 误当性能优化；它主要是调用形式便利。' },
    ],
  },
  {
    id: 'broadcast', shortTitle: '广播机制', title: '广播：让兼容形状一起计算', icon: Layers3, accent: 'fuchsia',
    description: '从右向左对齐形状；每一维相等，或至少有一个为 1。',
    steps: [
      { kicker: '01 · 对齐', title: '从最后一维开始比较', description: '较短形状在左侧补 1，而不是在右侧补。', code: '(2, 3) + (3,) → (2, 3) + (1, 3)', input: ['(2, 3)', '(3,)'], output: ['(2, 3)', '(1, 3)'], note: '这条“右对齐”规则决定了行向量为什么可以直接加到矩阵。' },
      { kicker: '02 · 兼容', title: '相等或其中一个为 1', description: '3 对 3 可以；2 对 1 也可以；3 对 2 不可以。', code: '2 ↔ 1 ✓    3 ↔ 3 ✓', input: ['2 ↔ 1', '3 ↔ 3'], output: ['✓', '✓'], note: '只要有一个轴不兼容，整个运算就失败。' },
      { kicker: '03 · 扩展', title: '维度 1 逻辑扩展后逐元素计算', description: 'NumPy 通常不会真的复制数据，而是使用步幅完成逻辑扩展。', code: 'A + b', input: ['A: (2, 3)', 'b: (3,)'], output: ['result: (2, 3)'], note: '上方广播实验室可以逐步播放这一过程。' },
    ],
  },
  {
    id: 'reshape', shortTitle: '变形转置', title: 'reshape 与 transpose：改变观察方式', icon: Move3d, accent: 'orange',
    description: 'reshape 重新组织轴长度，transpose 交换轴顺序。',
    steps: [
      { kicker: '01 · reshape', title: '元素数量必须保持不变', description: '6 个元素可以变成 (2,3) 或 (3,2)，不能变成 (4,2)。', code: 'a.reshape(2, 3)', input: ['1', '2', '3', '4', '5', '6'], output: ['1 2 3', '4 5 6'], note: '-1 可以让 NumPy 自动推断一个维度。' },
      { kicker: '02 · transpose', title: '交换行轴和列轴', description: '二维数组的 .T 会把 shape (2,3) 变为 (3,2)。', code: 'a.T', input: ['1 2 3', '4 5 6'], output: ['1 4', '2 5', '3 6'], note: '高维数组用 transpose 指定新的轴顺序。' },
      { kicker: '03 · 批次维', title: '用 newaxis 增加长度为 1 的轴', description: '这是准备模型输入和控制广播方向的常用方式。', code: 'a[:, np.newaxis]', input: ['shape=(3,)'], output: ['shape=(3, 1)'], note: '(3,) 和 (3,1) 不是同一种形状。' },
    ],
  },
  {
    id: 'aggregate', shortTitle: '聚合统计', title: '聚合：把一组数据压缩成结论', icon: Sigma, accent: 'emerald',
    description: 'sum、mean、std、min、max、argmax 都可以按轴工作。',
    steps: [
      { kicker: '01 · 全局', title: '不指定 axis 就处理全部元素', description: '结果通常从数组变成一个标量。', code: 'a.mean()', input: ['1', '2', '3', '4'], output: ['2.5'], note: 'mean、std 对数据类型和缺失值比较敏感。' },
      { kicker: '02 · 按轴', title: 'axis 决定被压缩的维度', description: '保留下来的维度对应每组统计结果。', code: 'a.mean(axis=0)', input: ['1 2', '3 4'], output: ['2', '3'], note: 'keepdims=True 可以保留长度为 1 的轴，方便继续广播。' },
      { kicker: '03 · 位置', title: 'argmax 返回最大值的索引', description: '分类模型常用它从概率中选择预测类别。', code: 'np.argmax([.1, .7, .2])', input: ['.1', '.7', '.2'], output: ['index=1'], note: 'max 给出值，argmax 给出位置。' },
    ],
  },
  {
    id: 'condition', shortTitle: '条件与清洗', title: '条件运算：筛选、替换和限制范围', icon: Filter, accent: 'rose',
    description: '布尔掩码负责选择，where 负责二选一，clip 负责截断边界。',
    steps: [
      { kicker: '01 · 掩码', title: '比较运算生成布尔数组', description: '掩码的 shape 通常和原数组相同。', code: 'scores >= 60', input: ['55', '80', '40'], output: ['False', 'True', 'False'], note: '掩码本身也是 ndarray。' },
      { kicker: '02 · where', title: '根据条件批量二选一', description: 'True 位置取第二个参数，False 位置取第三个参数。', code: 'np.where(scores >= 60, 1, 0)', input: ['F', 'T', 'F'], output: ['0', '1', '0'], note: '三个参数之间同样遵循广播规则。' },
      { kicker: '03 · clip', title: '把数值限制在指定区间', description: '低于下限的变成下限，高于上限的变成上限。', code: 'np.clip([-5, 2, 20], 0, 10)', input: ['-5', '2', '20'], output: ['0', '2', '10'], note: '图像像素和异常值处理经常使用 clip。' },
    ],
  },
  {
    id: 'linalg', shortTitle: '矩阵运算', title: '线性代数：AI 计算的共同语言', icon: Calculator, accent: 'sky',
    description: '区分逐元素乘法 * 与矩阵乘法 @，并始终追踪输入输出 shape。',
    steps: [
      { kicker: '01 · 逐元素', title: '* 要求形状相同或可广播', description: '对应位置相乘，输出通常保留广播后的形状。', code: 'a * b', input: ['1 2', '3 4'], output: ['逐格相乘'], note: '这不是教材中的矩阵乘法。' },
      { kicker: '02 · 矩阵乘法', title: '@ 消去中间维度', description: '(m,n) @ (n,p) 得到 (m,p)，两个 n 必须相等。', code: 'x @ weights', input: ['x: (32, 10)', 'W: (10, 3)'], output: ['(32, 3)'], note: '32 是批次大小，3 可以是类别数量。' },
      { kicker: '03 · 线性层', title: '矩阵乘法后加偏置', description: 'bias 通过广播加到批次中的每一行。', code: 'output = x @ W + bias', input: ['(32, 3)', 'bias: (3,)'], output: ['(32, 3)'], note: '这是神经网络线性层的核心表达式。' },
    ],
  },
  {
    id: 'random', shortTitle: '随机生成', title: '随机数：可复现地打乱与采样', icon: Shuffle, accent: 'amber',
    description: '现代写法优先使用 default_rng，并显式保存生成器。',
    steps: [
      { kicker: '01 · 生成器', title: '用种子创建独立随机源', description: '同样的种子会生成同样的随机序列，便于复现实验。', code: 'rng = np.random.default_rng(42)', input: ['seed=42'], output: ['Generator'], note: '种子不是“让随机消失”，而是确定伪随机序列的起点。' },
      { kicker: '02 · 分布', title: '根据问题选择随机分布', description: 'random 是 [0,1) 均匀分布，normal 是正态分布。', code: 'rng.normal(0, 1, size=3)', input: ['μ=0', 'σ=1'], output: ['0.30', '-1.04', '0.75'], note: '模型参数初始化经常使用正态或均匀分布。' },
      { kicker: '03 · 采样', title: 'shuffle 打乱，choice 抽样', description: 'shuffle 原地改变顺序；choice 返回抽取结果。', code: 'rng.choice(data, 3, replace=False)', input: ['A', 'B', 'C', 'D'], output: ['C', 'A', 'D'], note: '划分训练集之前通常先打乱样本。' },
    ],
  },
  {
    id: 'copy', shortTitle: '视图与复制', title: 'view 与 copy：最容易忽略的引用关系', icon: Copy, accent: 'red',
    description: '许多切片只创建新的观察窗口，底层数据仍由原数组共享。',
    steps: [
      { kicker: '01 · view', title: '切片可能共享底层数据', description: '修改切片中的元素，原数组也可能随之改变。', code: 'part = a[1:3]', input: ['a: 1 2 3 4'], output: ['part: 2 3'], note: '这和 Python list 切片通常创建新列表不同。' },
      { kicker: '02 · 联动', title: '共享内存意味着修改可见', description: 'part[0] 实际指向原数组中的 a[1]。', code: 'part[0] = 99', input: ['part: 2 3'], output: ['a: 1 99 3 4'], note: 'np.shares_memory(a, part) 可以辅助判断。' },
      { kicker: '03 · copy', title: '需要独立数据时显式复制', description: '.copy() 分配新的内存，后续修改互不影响。', code: 'safe = a[1:3].copy()', input: ['共享视图'], output: ['独立数组'], note: '复制更安全但会占用额外内存，需要根据场景选择。' },
    ],
  },
]

const apiGroups = [
  ['创建', 'array · arange · linspace · zeros · ones · full'],
  ['形状', 'shape · ndim · size · dtype · reshape · transpose'],
  ['选择', '索引 · slice · 布尔掩码 · where · take'],
  ['组合', 'concatenate · stack · split · repeat · tile'],
  ['统计', 'sum · mean · std · min · max · argmax · unique'],
  ['数学', 'sqrt · exp · log · clip · round · abs'],
  ['线代', 'dot · matmul/@ · norm · solve · eig'],
  ['随机与 I/O', 'default_rng · shuffle · choice · save · load'],
]

const accentStyles: Record<string, string> = {
  cyan: 'bg-cyan-400/10 text-cyan-300',
  blue: 'bg-blue-400/10 text-blue-300',
  violet: 'bg-violet-400/10 text-violet-300',
  pink: 'bg-pink-400/10 text-pink-300',
  lime: 'bg-lime-400/10 text-lime-300',
  fuchsia: 'bg-fuchsia-400/10 text-fuchsia-300',
  orange: 'bg-orange-400/10 text-orange-300',
  emerald: 'bg-emerald-400/10 text-emerald-300',
  rose: 'bg-rose-400/10 text-rose-300',
  sky: 'bg-sky-400/10 text-sky-300',
  amber: 'bg-amber-400/10 text-amber-300',
  red: 'bg-red-400/10 text-red-300',
}

function shapeText(shape: number[]) {
  if (shape.length === 0) return 'scalar'
  return `(${shape.join(', ')}${shape.length === 1 ? ',' : ''})`
}

function MatrixView({ values, tone = 'blue', ghost = false, invalid = false }: { values: Matrix; tone?: 'blue' | 'pink' | 'green'; ghost?: boolean; invalid?: boolean }) {
  return (
    <div className={`numpy-matrix numpy-matrix--${tone} ${ghost ? 'is-ghost' : ''} ${invalid ? 'is-invalid' : ''}`}>
      {values.map((row, rowIndex) => (
        <div key={rowIndex} className="numpy-matrix-row">
          {row.map((value, columnIndex) => (
            <span key={`${rowIndex}-${columnIndex}`} className="numpy-cell" style={{ animationDelay: `${(rowIndex * row.length + columnIndex) * 70}ms` }}>{value}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

function FlowTokens({ items, tone }: { items: string[]; tone: 'input' | 'output' }) {
  return <div className={`numpy-flow-tokens numpy-flow-tokens--${tone}`}>{items.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
}

export function NumpyVisualLabPage() {
  const [exampleIndex, setExampleIndex] = useState(1)
  const [broadcastStep, setBroadcastStep] = useState(0)
  const [autoPlaying, setAutoPlaying] = useState(false)
  const [conceptIndex, setConceptIndex] = useState(0)
  const [conceptStep, setConceptStep] = useState(0)

  const example = broadcastExamples[exampleIndex]
  const concept = concepts[conceptIndex]
  const lessonStep = concept.steps[conceptStep]
  const SelectedConceptIcon = concept.icon

  useEffect(() => {
    if (!autoPlaying) return
    const timer = window.setInterval(() => {
      setBroadcastStep((current) => {
        if (current >= 2) {
          setAutoPlaying(false)
          return 3
        }
        return current + 1
      })
    }, 1250)
    return () => window.clearInterval(timer)
  }, [autoPlaying])

  const stepMessage = useMemo(() => {
    if (broadcastStep === 0) return { title: '先看原始形状', body: `${shapeText(example.aShape)} 和 ${shapeText(example.bShape)} 能不能一起计算？先不要看数值。` }
    if (broadcastStep === 1) return { title: '从右向左对齐维度', body: example.alignment }
    if (broadcastStep === 2) return { title: example.compatible ? '逐维检查通过' : '发现不兼容维度', body: example.verdict }
    return example.compatible
      ? { title: '逻辑扩展，然后逐元素相加', body: '维度为 1 的方向被重复使用，得到广播后的结果形状。' }
      : { title: '运算停止并抛出 ValueError', body: '修改 shape，例如把 (2,) reshape 成 (2, 1)，才能按列广播。' }
  }, [broadcastStep, example])

  function nextBroadcastStep() {
    setAutoPlaying(false)
    setBroadcastStep((current) => Math.min(3, current + 1))
  }

  function resetBroadcast() {
    setAutoPlaying(false)
    setBroadcastStep(0)
  }

  function selectBroadcastExample(index: number) {
    setExampleIndex(index)
    setBroadcastStep(0)
    setAutoPlaying(false)
  }

  function selectConcept(index: number) {
    setConceptIndex(index)
    setConceptStep(0)
  }

  return (
    <AppShell>
      <div className="numpy-lab min-h-screen overflow-hidden bg-[#070a18] text-slate-100">
        <div className="numpy-orb numpy-orb--one" />
        <div className="numpy-orb numpy-orb--two" />
        <section className="relative mx-auto max-w-[1440px] px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              <Sparkles size={14} /> NumPy Visual Lab
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">别背规则，<span className="numpy-gradient-text">看见数组如何变化</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">把 shape 当作地图，把 axis 当作方向。先用四步动画真正理解广播，再沿完整概念路线掌握 NumPy 的核心能力。</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-300">
              <a href="#broadcast-studio" className="rounded-xl bg-cyan-400 px-5 py-3 text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">先看广播动画</a>
              <a href="#concept-map" className="rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 transition hover:border-white/20 hover:bg-white/[0.08]">浏览 NumPy 概念地图</a>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[['12', '核心概念'], ['36', '拆解步骤'], ['4', '广播案例'], ['1', 'shape 思维主线']].map(([value, label]) => <div key={label} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-center backdrop-blur"><div className="text-2xl font-black text-white">{value}</div><div className="mt-1 text-[11px] text-slate-500">{label}</div></div>)}
          </div>
        </section>

        <section id="broadcast-studio" className="relative mx-auto max-w-[1440px] scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8">
          <div className="numpy-panel overflow-hidden rounded-[32px] border border-white/[0.09] bg-[#10162b]/90 shadow-2xl shadow-black/30">
            <div className="border-b border-white/[0.07] px-5 py-6 sm:px-8 lg:px-10">
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                <div><p className="text-[10px] font-black uppercase tracking-[0.25em] text-fuchsia-400">Broadcast Studio</p><h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">广播机制 · 四步动画</h2><p className="mt-2 text-sm text-slate-400">真正决定能否计算的是 shape，不是数组里有几个看起来相似的数字。</p></div>
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="广播案例">
                  {broadcastExamples.map((item, index) => <button key={item.id} role="tab" aria-selected={exampleIndex === index} onClick={() => selectBroadcastExample(index)} className={`rounded-xl border px-3.5 py-2 text-[11px] font-bold transition ${exampleIndex === index ? 'border-cyan-300/50 bg-cyan-300/15 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,.12)]' : 'border-white/10 bg-white/[0.035] text-slate-400 hover:bg-white/[0.07] hover:text-white'}`}>{item.label}</button>)}
                </div>
              </div>
            </div>

            <div className="px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
              <div className={`rounded-2xl border-l-4 px-5 py-4 transition-all duration-500 ${example.compatible ? 'border-fuchsia-400 bg-fuchsia-400/[0.08]' : 'border-rose-400 bg-rose-400/[0.08]'}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div><div className="text-sm font-black text-white">步骤 {broadcastStep + 1} / 4 · {stepMessage.title}</div><div className="mt-1 font-mono text-xs leading-5 text-slate-400">{stepMessage.body}</div></div>
                  <div className="flex gap-1.5">{[0, 1, 2, 3].map((step) => <span key={step} className={`h-2 rounded-full transition-all duration-500 ${step <= broadcastStep ? 'w-8 bg-fuchsia-400' : 'w-2 bg-white/10'}`} />)}</div>
                </div>
              </div>

              <div className="mt-8 grid items-center gap-5 overflow-x-auto pb-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="min-w-[250px] text-center">
                  <div className="mb-3 text-xs font-bold text-slate-400">矩阵 A <span className="font-mono text-cyan-300">{shapeText(example.aShape)}</span></div>
                  <MatrixView values={example.a} />
                </div>
                <div className="text-center text-3xl font-light text-fuchsia-400">+</div>
                <div className="min-w-[250px] text-center">
                  <div className="mb-3 text-xs font-bold text-slate-400">数组 B <span className="font-mono text-pink-300">{broadcastStep >= 1 ? example.alignment.split('+')[1]?.trim() : shapeText(example.bShape)}</span></div>
                  <MatrixView values={broadcastStep >= 2 && example.compatible ? example.expandedB : example.b} tone="pink" ghost={broadcastStep === 2 && example.compatible} invalid={broadcastStep >= 2 && !example.compatible} />
                  {broadcastStep >= 2 && example.compatible && <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-fuchsia-400/10 px-3 py-1 text-[10px] font-bold text-fuchsia-300"><Layers3 size={11} />逻辑扩展到 {shapeText(example.aShape)}</div>}
                </div>
                <div className={`text-center text-3xl font-light ${broadcastStep >= 3 && example.compatible ? 'text-emerald-400' : broadcastStep >= 3 ? 'text-rose-400' : 'text-slate-700'}`}>=</div>
                <div className="min-w-[250px] text-center">
                  <div className="mb-3 text-xs font-bold text-slate-400">{example.compatible ? '结果' : '运行结果'} <span className="font-mono text-emerald-300">{broadcastStep >= 3 && example.compatible ? shapeText(example.aShape) : '?'}</span></div>
                  {broadcastStep >= 3 ? (
                    example.result ? <MatrixView values={example.result} tone="green" /> : <div className="mx-auto flex min-h-[112px] max-w-[270px] items-center justify-center rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 font-mono text-xs leading-5 text-rose-200"><X size={18} className="mr-2 shrink-0" />ValueError: shapes {shapeText(example.aShape)} and {shapeText(example.bShape)} are incompatible</div>
                  ) : <div className="mx-auto grid min-h-[112px] max-w-[270px] place-items-center rounded-2xl border border-dashed border-white/10 bg-black/10 text-xs text-slate-600">等待计算结果</div>}
                </div>
              </div>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button onClick={nextBroadcastStep} disabled={broadcastStep === 3} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 text-xs font-black text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 disabled:pointer-events-none disabled:opacity-40">下一步 <ArrowRight size={15} /></button>
                <button onClick={() => { if (broadcastStep === 3) setBroadcastStep(0); setAutoPlaying((current) => !current) }} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 text-xs font-black text-white transition hover:-translate-y-0.5">{autoPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}{autoPlaying ? '暂停播放' : '自动播放'}</button>
                <button onClick={resetBroadcast} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 text-xs font-bold text-slate-300 transition hover:bg-white/[0.08]"><RefreshCcw size={14} />重置</button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              ['1', '右对齐', '从 shape 的最后一维向左比较；短的 shape 在左侧补 1。'],
              ['2', '检查兼容', '每一维必须相等，或者其中一个维度等于 1。'],
              ['3', '确定结果', '每一维取较大值；维度为 1 的数据被逻辑重复使用。'],
            ].map(([number, title, body]) => <div key={number} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"><div className="flex items-start gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-cyan-400/15 text-xs font-black text-cyan-300">{number}</span><div><h3 className="text-sm font-black text-white">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{body}</p></div></div></div>)}
          </div>
        </section>

        <section id="concept-map" className="relative border-y border-white/[0.07] bg-[#090d1d]/80 py-20 scroll-mt-16">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl"><p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400">Concept Map</p><h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">NumPy 核心概念路线</h2><p className="mt-3 text-sm leading-6 text-slate-400">不是 API 清单，而是从“数据是什么”走到“数据如何变换”。选择一个概念，再按步骤观察输入、操作与输出。</p></div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {concepts.map((item, index) => {
                const Icon = item.icon
                return <button key={item.id} onClick={() => selectConcept(index)} className={`group rounded-2xl border p-4 text-left transition ${index === conceptIndex ? 'border-cyan-300/40 bg-cyan-300/[0.1] shadow-[0_0_30px_rgba(34,211,238,.08)]' : 'border-white/[0.07] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05]'}`}><div className="flex items-center justify-between"><span className={`grid h-9 w-9 place-items-center rounded-xl ${accentStyles[item.accent]}`}><Icon size={17} /></span><span className="font-mono text-[10px] text-slate-600">{String(index + 1).padStart(2, '0')}</span></div><div className={`mt-3 text-xs font-black ${index === conceptIndex ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>{item.shortTitle}</div></button>
              })}
            </div>

            <div className="mt-6 overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#11172a]">
              <div className="grid lg:grid-cols-[.82fr_1.18fr]">
                <div className="border-b border-white/[0.07] p-6 lg:border-b-0 lg:border-r lg:p-8">
                  <div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><SelectedConceptIcon size={22} /></span><div><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">模块 {conceptIndex + 1} / {concepts.length}</div><h3 className="mt-1 text-xl font-black text-white">{concept.title}</h3></div></div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{concept.description}</p>
                  <div className="mt-6 space-y-2">
                    {concept.steps.map((step, index) => <button key={step.title} onClick={() => setConceptStep(index)} className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${index === conceptStep ? 'border-fuchsia-400/30 bg-fuchsia-400/[0.08]' : 'border-transparent bg-white/[0.025] hover:bg-white/[0.05]'}`}><span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg text-[10px] font-black ${index <= conceptStep ? 'bg-fuchsia-400 text-fuchsia-950' : 'bg-white/[0.06] text-slate-500'}`}>{index < conceptStep ? <Check size={12} /> : index + 1}</span><span className={`text-xs font-bold ${index === conceptStep ? 'text-white' : 'text-slate-500'}`}>{step.title}</span></button>)}
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-4"><div><div className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-400">{lessonStep.kicker}</div><h4 className="mt-2 text-lg font-black text-white">{lessonStep.title}</h4><p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">{lessonStep.description}</p></div><code className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-[11px] text-cyan-200">{lessonStep.code}</code></div>

                    <div key={`${concept.id}-${conceptStep}`} className="numpy-concept-flow mt-7 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
                      <div><div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-600">输入 / 当前状态</div><FlowTokens items={lessonStep.input} tone="input" /></div>
                      <div className="flex justify-center text-slate-600 md:block"><ArrowDown size={18} className="md:hidden" /><ChevronRight size={22} className="hidden md:block" /></div>
                      <div><div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-600">输出 / 新状态</div><FlowTokens items={lessonStep.output} tone="output" /></div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-300/10 bg-amber-300/[0.045] px-4 py-3 text-xs leading-5 text-slate-400"><CircleHelp size={16} className="mt-0.5 shrink-0 text-amber-300" /><span><strong className="text-amber-200">理解重点：</strong>{lessonStep.note}</span></div>

                  <div className="mt-5 flex items-center justify-between">
                    <button onClick={() => setConceptStep((current) => Math.max(0, current - 1))} disabled={conceptStep === 0} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold text-slate-400 transition hover:bg-white/[0.05] disabled:opacity-30"><ChevronLeft size={14} />上一步</button>
                    <span className="font-mono text-[10px] text-slate-600">STEP {conceptStep + 1} / {concept.steps.length}</span>
                    <button onClick={() => setConceptStep((current) => Math.min(concept.steps.length - 1, current + 1))} disabled={conceptStep === concept.steps.length - 1} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-black text-slate-950 transition hover:bg-cyan-300 disabled:opacity-30">下一步<ChevronRight size={14} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
            <div className="rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-cyan-400/[0.09] to-transparent p-7">
              <Variable size={25} className="text-cyan-300" />
              <h2 className="mt-5 text-2xl font-black text-white">只用一条主线串起 NumPy</h2>
              <div className="mt-6 space-y-3 font-mono text-xs">
                {['数据 → ndarray', 'ndarray → shape + dtype', 'shape → axis + 索引', '兼容 shape → 广播', '轴变化 → reshape / 聚合', '二维运算 → 线性代数'].map((line, index) => <div key={line} className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.06] text-[10px] text-cyan-300">{index + 1}</span><span className="text-slate-300">{line}</span></div>)}
              </div>
              <p className="mt-6 text-xs leading-5 text-slate-500">遇到报错先打印 <code className="text-cyan-300">shape</code>，遇到结果方向不对先检查 <code className="text-cyan-300">axis</code>。这两个习惯能解决大部分初学问题。</p>
            </div>

            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-7">
              <h2 className="text-xl font-black text-white">常用 API 速查</h2>
              <p className="mt-2 text-xs text-slate-500">先理解概念，再在需要时查 API；不需要一次全部背下来。</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {apiGroups.map(([title, api]) => <div key={title} className="rounded-xl border border-white/[0.07] bg-black/15 p-4"><div className="text-[10px] font-black uppercase tracking-wider text-fuchsia-300">{title}</div><code className="mt-2 block text-[11px] leading-5 text-slate-400">{api}</code></div>)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  )
}
