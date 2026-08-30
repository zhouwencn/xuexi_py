<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# itertools：惰性迭代工具

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/itertools.html](https://docs.python.org/3.12/library/itertools.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **22** 个公开对象或用户命令。私有下划线接口不收录。

## `itertools`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`itertools`](https://docs.python.org/3.12/library/itertools.html#module-itertools) | 模块 | `` | Functional tools for creating and using iterators. |
| [`itertools.accumulate`](https://docs.python.org/3.12/library/itertools.html#itertools.accumulate) | 函数 | `(iterable, func=None, *, initial=None)` | Return series of accumulated sums (or other binary function results). |
| [`itertools.batched`](https://docs.python.org/3.12/library/itertools.html#itertools.batched) | 函数 | `(iterable, n)` | Batch data into tuples of length n. The last batch may be shorter than n. |
| [`itertools.chain`](https://docs.python.org/3.12/library/itertools.html#itertools.chain) | 函数 | `` | chain(*iterables) --> chain object |
| [`itertools.combinations`](https://docs.python.org/3.12/library/itertools.html#itertools.combinations) | 函数 | `(iterable, r)` | Return successive r-length combinations of elements in the iterable. |
| [`itertools.combinations_with_replacement`](https://docs.python.org/3.12/library/itertools.html#itertools.combinations_with_replacement) | 函数 | `(iterable, r)` | Return successive r-length combinations of elements in the iterable allowing individual elements to have successive repeats. |
| [`itertools.compress`](https://docs.python.org/3.12/library/itertools.html#itertools.compress) | 函数 | `(data, selectors)` | Return data elements corresponding to true selector elements. |
| [`itertools.count`](https://docs.python.org/3.12/library/itertools.html#itertools.count) | 函数 | `(start=0, step=1)` | Return a count object whose .__next__() method returns consecutive values. |
| [`itertools.cycle`](https://docs.python.org/3.12/library/itertools.html#itertools.cycle) | 函数 | `(iterable, /)` | Return elements from the iterable until it is exhausted. Then repeat the sequence indefinitely. |
| [`itertools.dropwhile`](https://docs.python.org/3.12/library/itertools.html#itertools.dropwhile) | 函数 | `(predicate, iterable, /)` | Drop items from the iterable while predicate(item) is true. |
| [`itertools.filterfalse`](https://docs.python.org/3.12/library/itertools.html#itertools.filterfalse) | 函数 | `(function, iterable, /)` | Return those items of iterable for which function(item) is false. |
| [`itertools.groupby`](https://docs.python.org/3.12/library/itertools.html#itertools.groupby) | 函数 | `(iterable, key=None)` | make an iterator that returns consecutive keys and groups from the iterable |
| [`itertools.islice`](https://docs.python.org/3.12/library/itertools.html#itertools.islice) | 函数 | `` | islice(iterable, stop) --> islice object islice(iterable, start, stop[, step]) --> islice object |
| [`itertools.pairwise`](https://docs.python.org/3.12/library/itertools.html#itertools.pairwise) | 函数 | `(iterable, /)` | Return an iterator of overlapping pairs taken from the input iterator. |
| [`itertools.permutations`](https://docs.python.org/3.12/library/itertools.html#itertools.permutations) | 函数 | `(iterable, r=None)` | Return successive r-length permutations of elements in the iterable. |
| [`itertools.product`](https://docs.python.org/3.12/library/itertools.html#itertools.product) | 函数 | `` | product(*iterables, repeat=1) --> product object |
| [`itertools.repeat`](https://docs.python.org/3.12/library/itertools.html#itertools.repeat) | 函数 | `` | repeat(object [,times]) -> create an iterator which returns the object for the specified number of times.  If not specified, returns the object endlessly. |
| [`itertools.starmap`](https://docs.python.org/3.12/library/itertools.html#itertools.starmap) | 函数 | `(function, iterable, /)` | Return an iterator whose values are returned from the function evaluated with an argument tuple taken from the given sequence. |
| [`itertools.takewhile`](https://docs.python.org/3.12/library/itertools.html#itertools.takewhile) | 函数 | `(predicate, iterable, /)` | Return successive entries from an iterable as long as the predicate evaluates to true for each entry. |
| [`itertools.tee`](https://docs.python.org/3.12/library/itertools.html#itertools.tee) | 函数 | `(iterable, n=2, /)` | Returns a tuple of n independent iterators. |
| [`itertools.zip_longest`](https://docs.python.org/3.12/library/itertools.html#itertools.zip_longest) | 函数 | `` | zip_longest(iter1 [,iter2 [...]], [fillvalue=None]) --> zip_longest object |

## `itertools.chain`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`itertools.chain.from_iterable`](https://docs.python.org/3.12/library/itertools.html#itertools.chain.from_iterable) | 方法 | `(type, iterable, /)` | Alternative chain() constructor taking a single iterable argument that evaluates lazily. |
