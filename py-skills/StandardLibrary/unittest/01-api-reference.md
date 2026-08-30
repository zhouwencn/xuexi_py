<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# unittest：标准测试框架

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/unittest.html](https://docs.python.org/3.12/library/unittest.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **179** 个公开对象或用户命令。私有下划线接口不收录。

## `unittest`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest`](https://docs.python.org/3.12/library/unittest.html#module-unittest) | 模块 | `` | Python unit testing framework, based on Erich Gamma's JUnit and Kent Beck's Smalltalk testing framework (used with permission). |
| [`unittest.addModuleCleanup`](https://docs.python.org/3.12/library/unittest.html#unittest.addModuleCleanup) | 函数 | `(function, /, *args, **kwargs)` | Same as addCleanup, except the cleanup items are called even if setUpModule fails (unlike tearDownModule). |
| [`unittest.defaultTestLoader`](https://docs.python.org/3.12/library/unittest.html#unittest.defaultTestLoader) | 数据/常量 | `` | This class is responsible for loading tests according to various criteria and returning them wrapped in a TestSuite |
| [`unittest.doModuleCleanups`](https://docs.python.org/3.12/library/unittest.html#unittest.doModuleCleanups) | 函数 | `()` | Execute all module cleanup functions. Normally called for you after tearDownModule. |
| [`unittest.enterModuleContext`](https://docs.python.org/3.12/library/unittest.html#unittest.enterModuleContext) | 方法 | `(cm)` | Same as enterContext, but module-wide. |
| [`unittest.expectedFailure`](https://docs.python.org/3.12/library/unittest.html#unittest.expectedFailure) | 函数 | `(test_item)` | 参见官方 API 文档。 |
| [`unittest.FunctionTestCase`](https://docs.python.org/3.12/library/unittest.html#unittest.FunctionTestCase) | 类 | `(testFunc, setUp=None, tearDown=None, description=None)` | A test case that wraps a test function. |
| [`unittest.installHandler`](https://docs.python.org/3.12/library/unittest.html#unittest.installHandler) | 函数 | `()` | 参见官方 API 文档。 |
| [`unittest.IsolatedAsyncioTestCase`](https://docs.python.org/3.12/library/unittest.html#unittest.IsolatedAsyncioTestCase) | 类 | `` | 参见官方 API 文档。 |
| [`unittest.main`](https://docs.python.org/3.12/library/unittest.html#unittest.main) | 函数 | `` | Unittest main program |
| [`unittest.registerResult`](https://docs.python.org/3.12/library/unittest.html#unittest.registerResult) | 函数 | `(result)` | 参见官方 API 文档。 |
| [`unittest.removeHandler`](https://docs.python.org/3.12/library/unittest.html#unittest.removeHandler) | 函数 | `(method=None)` | 参见官方 API 文档。 |
| [`unittest.removeResult`](https://docs.python.org/3.12/library/unittest.html#unittest.removeResult) | 函数 | `(result)` | 参见官方 API 文档。 |
| [`unittest.skip`](https://docs.python.org/3.12/library/unittest.html#unittest.skip) | 函数 | `(reason)` | Unconditionally skip a test. |
| [`unittest.skipIf`](https://docs.python.org/3.12/library/unittest.html#unittest.skipIf) | 函数 | `(condition, reason)` | Skip a test if the condition is true. |
| [`unittest.SkipTest`](https://docs.python.org/3.12/library/unittest.html#unittest.SkipTest) | 异常 | `` | Raise this exception in a test to skip it. |
| [`unittest.skipUnless`](https://docs.python.org/3.12/library/unittest.html#unittest.skipUnless) | 函数 | `(condition, reason)` | Skip a test unless the condition is true. |
| [`unittest.TestCase`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase) | 类 | `(methodName='runTest')` | A class whose instances are single test cases. |
| [`unittest.TestLoader`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader) | 类 | `()` | This class is responsible for loading tests according to various criteria and returning them wrapped in a TestSuite |
| [`unittest.TestResult`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult) | 类 | `(stream=None, descriptions=None, verbosity=None)` | Holder for test result information. |
| [`unittest.TestSuite`](https://docs.python.org/3.12/library/unittest.html#unittest.TestSuite) | 类 | `(tests=())` | A test suite is a composite test consisting of a number of TestCases. |
| [`unittest.TextTestResult`](https://docs.python.org/3.12/library/unittest.html#unittest.TextTestResult) | 类 | `(stream, descriptions, verbosity, *, durations=None)` | A test result class that can print formatted text results to a stream. |
| [`unittest.TextTestRunner`](https://docs.python.org/3.12/library/unittest.html#unittest.TextTestRunner) | 类 | `(stream=None, descriptions=True, verbosity=1, failfast=False, buffer=False, resultclass=None, warnings=None, *, tb_locals=False, duration...` | A test runner class that displays results in textual form. |

## `unittest.IsolatedAsyncioTestCase`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.IsolatedAsyncioTestCase.addAsyncCleanup`](https://docs.python.org/3.12/library/unittest.html#unittest.IsolatedAsyncioTestCase.addAsyncCleanup) | 方法 | `` | 参见官方 API 文档。 |
| [`unittest.IsolatedAsyncioTestCase.asyncSetUp`](https://docs.python.org/3.12/library/unittest.html#unittest.IsolatedAsyncioTestCase.asyncSetUp) | 方法 | `` | 参见官方 API 文档。 |
| [`unittest.IsolatedAsyncioTestCase.asyncTearDown`](https://docs.python.org/3.12/library/unittest.html#unittest.IsolatedAsyncioTestCase.asyncTearDown) | 方法 | `` | 参见官方 API 文档。 |
| [`unittest.IsolatedAsyncioTestCase.enterAsyncContext`](https://docs.python.org/3.12/library/unittest.html#unittest.IsolatedAsyncioTestCase.enterAsyncContext) | 方法 | `` | 参见官方 API 文档。 |
| [`unittest.IsolatedAsyncioTestCase.run`](https://docs.python.org/3.12/library/unittest.html#unittest.IsolatedAsyncioTestCase.run) | 方法 | `` | 参见官方 API 文档。 |

## `unittest.mock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.mock`](https://docs.python.org/3.12/library/unittest.mock.html#module-unittest.mock) | 模块 | `` | 参见官方 API 文档。 |
| [`unittest.mock.ANY`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.ANY) | 数据/常量 | `` | A helper object that compares equal to everything. |
| [`unittest.mock.AsyncMock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock) | 类 | `(*args, **kwargs)` | Enhance :class:`Mock` with features allowing to mock an async function. |
| [`unittest.mock.call`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.call) | 函数 | `` | 参见官方 API 文档。 |
| [`unittest.mock.create_autospec`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.create_autospec) | 函数 | `(spec, spec_set=False, instance=False, _parent=None, _name=None, *, unsafe=False, **kwargs)` | Create a mock object using another object as a spec. Attributes on the mock will use the corresponding attribute on the `spec` object as their spec. |
| [`unittest.mock.DEFAULT`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.DEFAULT) | 数据/常量 | `` | A unique, named, sentinel object. |
| [`unittest.mock.FILTER_DIR`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.FILTER_DIR) | 数据/常量 | `` | bool(x) -> bool |
| [`unittest.mock.MagicMock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.MagicMock) | 类 | `(*args, **kw)` | MagicMock is a subclass of Mock with default implementations of most of the magic methods. You can use MagicMock without having to configure the magic methods yourself. |
| [`unittest.mock.Mock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock) | 类 | `(spec=None, side_effect=None, return_value=sentinel.DEFAULT, wraps=None, name=None, spec_set=None, parent=None, _spec_state=None, _new_na...` | Create a new `Mock` object. `Mock` takes several optional arguments that specify the behaviour of the Mock object: |
| [`unittest.mock.mock_open`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.mock_open) | 函数 | `(mock=None, read_data='')` | A helper function to create a mock to replace the use of `open`. It works for `open` called directly or used as a context manager. |
| [`unittest.mock.NonCallableMagicMock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.NonCallableMagicMock) | 类 | `(*args, **kw)` | A version of `MagicMock` that isn't callable. |
| [`unittest.mock.NonCallableMock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.NonCallableMock) | 类 | `(spec=None, wraps=None, name=None, spec_set=None, parent=None, _spec_state=None, _new_name='', _new_parent=None, _spec_as_instance=False,...` | A non-callable version of `Mock` |
| [`unittest.mock.patch`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.patch) | 函数 | `(target, new=sentinel.DEFAULT, spec=None, create=False, spec_set=None, autospec=None, new_callable=None, *, unsafe=False, **kwargs)` | `patch` acts as a function decorator, class decorator or a context manager. Inside the body of the function or with statement, the `target` is patched with a `new` object. When ... |
| [`unittest.mock.PropertyMock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.PropertyMock) | 类 | `(spec=None, side_effect=None, return_value=sentinel.DEFAULT, wraps=None, name=None, spec_set=None, parent=None, _spec_state=None, _new_na...` | A mock intended to be used as a property, or other descriptor, on a class. `PropertyMock` provides `__get__` and `__set__` methods so you can specify a return value when it is f... |
| [`unittest.mock.seal`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.seal) | 函数 | `(mock)` | Disable the automatic generation of child mocks. |
| [`unittest.mock.sentinel`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.sentinel) | 数据/常量 | `` | Access attributes to return a named object, usable as a sentinel. |

## `unittest.mock.AsyncMock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.mock.AsyncMock.assert_any_await`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.assert_any_await) | 方法 | `(self, /, *args, **kwargs)` | Assert the mock has ever been awaited with the specified arguments. |
| [`unittest.mock.AsyncMock.assert_awaited`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.assert_awaited) | 方法 | `(self)` | Assert that the mock was awaited at least once. |
| [`unittest.mock.AsyncMock.assert_awaited_once`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.assert_awaited_once) | 方法 | `(self)` | Assert that the mock was awaited exactly once. |
| [`unittest.mock.AsyncMock.assert_awaited_once_with`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.assert_awaited_once_with) | 方法 | `(self, /, *args, **kwargs)` | Assert that the mock was awaited exactly once and with the specified arguments. |
| [`unittest.mock.AsyncMock.assert_awaited_with`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.assert_awaited_with) | 方法 | `(self, /, *args, **kwargs)` | Assert that the last await was with the specified arguments. |
| [`unittest.mock.AsyncMock.assert_has_awaits`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.assert_has_awaits) | 方法 | `(self, calls, any_order=False)` | Assert the mock has been awaited with the specified calls. The :attr:`await_args_list` list is checked for the awaits. |
| [`unittest.mock.AsyncMock.assert_not_awaited`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.assert_not_awaited) | 方法 | `(self)` | Assert that the mock was never awaited. |
| [`unittest.mock.AsyncMock.await_args`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.await_args) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.AsyncMock.await_args_list`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.await_args_list) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.AsyncMock.await_count`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.await_count) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.AsyncMock.reset_mock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.AsyncMock.reset_mock) | 方法 | `(self, /, *args, **kwargs)` | See :func:`.Mock.reset_mock()` |

## `unittest.mock.call`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.mock.call.call_list`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.call.call_list) | 方法 | `(self)` | For a call object that represents multiple calls, `call_list` returns a list of all the intermediate calls as well as the final call. |

## `unittest.mock.Mock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.mock.Mock.assert_any_call`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.assert_any_call) | 方法 | `(self, /, *args, **kwargs)` | assert the mock has been called with the specified arguments. |
| [`unittest.mock.Mock.assert_called`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.assert_called) | 方法 | `(self)` | assert that the mock was called at least once |
| [`unittest.mock.Mock.assert_called_once`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.assert_called_once) | 方法 | `(self)` | assert that the mock was called only once. |
| [`unittest.mock.Mock.assert_called_once_with`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.assert_called_once_with) | 方法 | `(self, /, *args, **kwargs)` | assert that the mock was called exactly once and that that call was with the specified arguments. |
| [`unittest.mock.Mock.assert_called_with`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.assert_called_with) | 方法 | `(self, /, *args, **kwargs)` | assert that the last call was made with the specified arguments. |
| [`unittest.mock.Mock.assert_has_calls`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.assert_has_calls) | 方法 | `(self, calls, any_order=False)` | assert the mock has been called with the specified calls. The `mock_calls` list is checked for the calls. |
| [`unittest.mock.Mock.assert_not_called`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.assert_not_called) | 方法 | `(self)` | assert that the mock was never called. |
| [`unittest.mock.Mock.attach_mock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.attach_mock) | 方法 | `(self, mock, attribute)` | Attach a mock as an attribute of this one, replacing its name and parent. Calls to the attached mock will be recorded in the `method_calls` and `mock_calls` attributes of this one. |
| [`unittest.mock.Mock.call_args`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.call_args) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.Mock.call_args_list`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.call_args_list) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.Mock.call_count`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.call_count) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.Mock.called`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.called) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.Mock.configure_mock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.configure_mock) | 方法 | `(self, /, **kwargs)` | Set attributes on the mock through keyword arguments. |
| [`unittest.mock.Mock.method_calls`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.method_calls) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.Mock.mock_add_spec`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.mock_add_spec) | 方法 | `(self, spec, spec_set=False)` | Add a spec to a mock. `spec` can either be an object or a list of strings. Only attributes on the `spec` can be fetched as attributes from the mock. |
| [`unittest.mock.Mock.mock_calls`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.mock_calls) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.Mock.reset_mock`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.reset_mock) | 方法 | `(self, visited=None, *, return_value: bool = False, side_effect: bool = False)` | Restore the mock object to its initial state. |
| [`unittest.mock.Mock.return_value`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.return_value) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.mock.Mock.side_effect`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.Mock.side_effect) | 属性 | `` | 参见官方 API 文档。 |

## `unittest.mock.patch`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.mock.patch.dict`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.patch.dict) | 函数 | `(in_dict, values=(), clear=False, **kwargs)` | Patch a dictionary, or dictionary like object, and restore the dictionary to its original state after the test. |
| [`unittest.mock.patch.multiple`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.patch.multiple) | 函数 | `(target, spec=None, create=False, spec_set=None, autospec=None, new_callable=None, **kwargs)` | Perform multiple patches in a single call. It takes the object to be patched (either as an object or a string to fetch the object by importing) and keyword arguments for the pat... |
| [`unittest.mock.patch.object`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.patch.object) | 函数 | `(target, attribute, new=sentinel.DEFAULT, spec=None, create=False, spec_set=None, autospec=None, new_callable=None, *, unsafe=False, **kw...` | patch the named member (`attribute`) on an object (`target`) with a mock object. |
| [`unittest.mock.patch.stopall`](https://docs.python.org/3.12/library/unittest.mock.html#unittest.mock.patch.stopall) | 函数 | `()` | Stop all active patches. LIFO to unroll nested patches. |

## `unittest.TestCase`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.TestCase.addClassCleanup`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.addClassCleanup) | 方法 | `` | Same as addCleanup, except the cleanup items are called even if setUpClass fails (unlike tearDownClass). |
| [`unittest.TestCase.addCleanup`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.addCleanup) | 方法 | `(self, function, /, *args, **kwargs)` | Add a function, with arguments, to be called when the test is completed. Functions added are called on a LIFO basis and are called after tearDown on test failure or success. |
| [`unittest.TestCase.addTypeEqualityFunc`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.addTypeEqualityFunc) | 方法 | `(self, typeobj, function)` | Add a type specific assertEqual style function to compare a type. |
| [`unittest.TestCase.assertAlmostEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertAlmostEqual) | 方法 | `(self, first, second, places=None, msg=None, delta=None)` | Fail if the two objects are unequal as determined by their difference rounded to the given number of decimal places (default 7) and comparing to zero, or by comparing that the d... |
| [`unittest.TestCase.assertCountEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertCountEqual) | 方法 | `(self, first, second, msg=None)` | Asserts that two iterables have the same elements, the same number of times, without regard to order. |
| [`unittest.TestCase.assertDictEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertDictEqual) | 方法 | `(self, d1, d2, msg=None)` | 参见官方 API 文档。 |
| [`unittest.TestCase.assertEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertEqual) | 方法 | `(self, first, second, msg=None)` | Fail if the two objects are unequal as determined by the '==' operator. |
| [`unittest.TestCase.assertFalse`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertFalse) | 方法 | `(self, expr, msg=None)` | Check that the expression is false. |
| [`unittest.TestCase.assertGreater`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertGreater) | 方法 | `(self, a, b, msg=None)` | Just like self.assertTrue(a > b), but with a nicer default message. |
| [`unittest.TestCase.assertGreaterEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertGreaterEqual) | 方法 | `(self, a, b, msg=None)` | Just like self.assertTrue(a >= b), but with a nicer default message. |
| [`unittest.TestCase.assertIn`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertIn) | 方法 | `(self, member, container, msg=None)` | Just like self.assertTrue(a in b), but with a nicer default message. |
| [`unittest.TestCase.assertIs`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertIs) | 方法 | `(self, expr1, expr2, msg=None)` | Just like self.assertTrue(a is b), but with a nicer default message. |
| [`unittest.TestCase.assertIsInstance`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertIsInstance) | 方法 | `(self, obj, cls, msg=None)` | Same as self.assertTrue(isinstance(obj, cls)), with a nicer default message. |
| [`unittest.TestCase.assertIsNone`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertIsNone) | 方法 | `(self, obj, msg=None)` | Same as self.assertTrue(obj is None), with a nicer default message. |
| [`unittest.TestCase.assertIsNot`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertIsNot) | 方法 | `(self, expr1, expr2, msg=None)` | Just like self.assertTrue(a is not b), but with a nicer default message. |
| [`unittest.TestCase.assertIsNotNone`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertIsNotNone) | 方法 | `(self, obj, msg=None)` | Included for symmetry with assertIsNone. |
| [`unittest.TestCase.assertLess`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertLess) | 方法 | `(self, a, b, msg=None)` | Just like self.assertTrue(a < b), but with a nicer default message. |
| [`unittest.TestCase.assertLessEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertLessEqual) | 方法 | `(self, a, b, msg=None)` | Just like self.assertTrue(a <= b), but with a nicer default message. |
| [`unittest.TestCase.assertListEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertListEqual) | 方法 | `(self, list1, list2, msg=None)` | A list-specific equality assertion. |
| [`unittest.TestCase.assertLogs`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertLogs) | 方法 | `(self, logger=None, level=None)` | Fail unless a log message of level *level* or higher is emitted on *logger_name* or its children.  If omitted, *level* defaults to INFO and *logger* defaults to the root logger. |
| [`unittest.TestCase.assertMultiLineEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertMultiLineEqual) | 方法 | `(self, first, second, msg=None)` | Assert that two multi-line strings are equal. |
| [`unittest.TestCase.assertNoLogs`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertNoLogs) | 方法 | `(self, logger=None, level=None)` | Fail unless no log messages of level *level* or higher are emitted on *logger_name* or its children. |
| [`unittest.TestCase.assertNotAlmostEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertNotAlmostEqual) | 方法 | `(self, first, second, places=None, msg=None, delta=None)` | Fail if the two objects are equal as determined by their difference rounded to the given number of decimal places (default 7) and comparing to zero, or by comparing that the dif... |
| [`unittest.TestCase.assertNotEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertNotEqual) | 方法 | `(self, first, second, msg=None)` | Fail if the two objects are equal as determined by the '!=' operator. |
| [`unittest.TestCase.assertNotIn`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertNotIn) | 方法 | `(self, member, container, msg=None)` | Just like self.assertTrue(a not in b), but with a nicer default message. |
| [`unittest.TestCase.assertNotIsInstance`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertNotIsInstance) | 方法 | `(self, obj, cls, msg=None)` | Included for symmetry with assertIsInstance. |
| [`unittest.TestCase.assertNotRegex`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertNotRegex) | 方法 | `(self, text, unexpected_regex, msg=None)` | Fail the test if the text matches the regular expression. |
| [`unittest.TestCase.assertRaises`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertRaises) | 方法 | `(self, expected_exception, *args, **kwargs)` | Fail unless an exception of class expected_exception is raised by the callable when invoked with specified positional and keyword arguments. If a different type of exception is ... |
| [`unittest.TestCase.assertRaisesRegex`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertRaisesRegex) | 方法 | `(self, expected_exception, expected_regex, *args, **kwargs)` | Asserts that the message in a raised exception matches a regex. |
| [`unittest.TestCase.assertRegex`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertRegex) | 方法 | `(self, text, expected_regex, msg=None)` | Fail the test unless the text matches the regular expression. |
| [`unittest.TestCase.assertSequenceEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertSequenceEqual) | 方法 | `(self, seq1, seq2, msg=None, seq_type=None)` | An equality assertion for ordered sequences (like lists and tuples). |
| [`unittest.TestCase.assertSetEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertSetEqual) | 方法 | `(self, set1, set2, msg=None)` | A set-specific equality assertion. |
| [`unittest.TestCase.assertTrue`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertTrue) | 方法 | `(self, expr, msg=None)` | Check that the expression is true. |
| [`unittest.TestCase.assertTupleEqual`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertTupleEqual) | 方法 | `(self, tuple1, tuple2, msg=None)` | A tuple-specific equality assertion. |
| [`unittest.TestCase.assertWarns`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertWarns) | 方法 | `(self, expected_warning, *args, **kwargs)` | Fail unless a warning of class warnClass is triggered by the callable when invoked with specified positional and keyword arguments.  If a different type of warning is triggered,... |
| [`unittest.TestCase.assertWarnsRegex`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.assertWarnsRegex) | 方法 | `(self, expected_warning, expected_regex, *args, **kwargs)` | Asserts that the message in a triggered warning matches a regexp. Basic functioning is similar to assertWarns() with the addition that only warnings whose messages also match th... |
| [`unittest.TestCase.countTestCases`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.countTestCases) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`unittest.TestCase.debug`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.debug) | 方法 | `(self)` | Run the test without collecting errors in a TestResult |
| [`unittest.TestCase.defaultTestResult`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.defaultTestResult) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`unittest.TestCase.doClassCleanups`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.doClassCleanups) | 方法 | `` | Execute all class cleanup functions. Normally called for you after tearDownClass. |
| [`unittest.TestCase.doCleanups`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.doCleanups) | 方法 | `(self)` | Execute all cleanup functions. Normally called for you after tearDown. |
| [`unittest.TestCase.enterClassContext`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.enterClassContext) | 方法 | `` | Same as enterContext, but class-wide. |
| [`unittest.TestCase.enterContext`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.enterContext) | 方法 | `(self, cm)` | Enters the supplied context manager. |
| [`unittest.TestCase.fail`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.fail) | 方法 | `(self, msg=None)` | Fail immediately, with the given message. |
| [`unittest.TestCase.failureException`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.failureException) | 属性 | `` | Assertion failed. |
| [`unittest.TestCase.id`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.id) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`unittest.TestCase.longMessage`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.longMessage) | 属性 | `` | bool(x) -> bool |
| [`unittest.TestCase.maxDiff`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.maxDiff) | 属性 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`unittest.TestCase.output`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.output) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestCase.records`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.records) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestCase.run`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.run) | 方法 | `(self, result=None)` | 参见官方 API 文档。 |
| [`unittest.TestCase.setUp`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.setUp) | 方法 | `(self)` | Hook method for setting up the test fixture before exercising it. |
| [`unittest.TestCase.setUpClass`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.setUpClass) | 方法 | `` | Hook method for setting up class fixture before running tests in the class. |
| [`unittest.TestCase.shortDescription`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.shortDescription) | 方法 | `(self)` | Returns a one-line description of the test, or None if no description has been provided. |
| [`unittest.TestCase.skipTest`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.skipTest) | 方法 | `(self, reason)` | Skip this test. |
| [`unittest.TestCase.subTest`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.subTest) | 方法 | `(self, msg=<object object at 0x100e91080>, **params)` | Return a context manager that will return the enclosed block of code in a subtest identified by the optional message and keyword parameters.  A failure in the subtest marks the ... |
| [`unittest.TestCase.tearDown`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.tearDown) | 方法 | `(self)` | Hook method for deconstructing the test fixture after testing it. |
| [`unittest.TestCase.tearDownClass`](https://docs.python.org/3.12/library/unittest.html#unittest.TestCase.tearDownClass) | 方法 | `` | Hook method for deconstructing the class fixture after running all tests in the class. |

## `unittest.TestLoader`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.TestLoader.discover`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.discover) | 方法 | `(self, start_dir, pattern='test*.py', top_level_dir=None)` | Find and return all test modules from the specified start directory, recursing into subdirectories to find them and return all tests found within them. Only test files that matc... |
| [`unittest.TestLoader.errors`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.errors) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestLoader.getTestCaseNames`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.getTestCaseNames) | 方法 | `(self, testCaseClass)` | Return a sorted sequence of method names found within testCaseClass |
| [`unittest.TestLoader.loadTestsFromModule`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.loadTestsFromModule) | 方法 | `(self, module, *, pattern=None)` | Return a suite of all test cases contained in the given module |
| [`unittest.TestLoader.loadTestsFromName`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.loadTestsFromName) | 方法 | `(self, name, module=None)` | Return a suite of all test cases given a string specifier. |
| [`unittest.TestLoader.loadTestsFromNames`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.loadTestsFromNames) | 方法 | `(self, names, module=None)` | Return a suite of all test cases found using the given sequence of string specifiers. See 'loadTestsFromName()'. |
| [`unittest.TestLoader.loadTestsFromTestCase`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.loadTestsFromTestCase) | 方法 | `(self, testCaseClass)` | Return a suite of all test cases contained in testCaseClass |
| [`unittest.TestLoader.sortTestMethodsUsing`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.sortTestMethodsUsing) | 属性 | `(x, y)` | Return -1 if x < y, 0 if x == y and 1 if x > y |
| [`unittest.TestLoader.suiteClass`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.suiteClass) | 属性 | `(tests=())` | A test suite is a composite test consisting of a number of TestCases. |
| [`unittest.TestLoader.testMethodPrefix`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.testMethodPrefix) | 属性 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`unittest.TestLoader.testNamePatterns`](https://docs.python.org/3.12/library/unittest.html#unittest.TestLoader.testNamePatterns) | 属性 | `` | 参见官方 API 文档。 |

## `unittest.TestResult`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.TestResult.addDuration`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addDuration) | 方法 | `(self, test, elapsed)` | Called when a test finished to run, regardless of its outcome. *test* is the test case corresponding to the test method. *elapsed* is the time represented in seconds, and it inc... |
| [`unittest.TestResult.addError`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addError) | 方法 | `(self, test, err)` | Called when an error has occurred. 'err' is a tuple of values as returned by sys.exc_info(). |
| [`unittest.TestResult.addExpectedFailure`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addExpectedFailure) | 方法 | `(self, test, err)` | Called when an expected failure/error occurred. |
| [`unittest.TestResult.addFailure`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addFailure) | 方法 | `(self, test, err)` | Called when an error has occurred. 'err' is a tuple of values as returned by sys.exc_info(). |
| [`unittest.TestResult.addSkip`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addSkip) | 方法 | `(self, test, reason)` | Called when a test is skipped. |
| [`unittest.TestResult.addSubTest`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addSubTest) | 方法 | `(self, test, subtest, err)` | Called at the end of a subtest. 'err' is None if the subtest ended successfully, otherwise it's a tuple of values as returned by sys.exc_info(). |
| [`unittest.TestResult.addSuccess`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addSuccess) | 方法 | `(self, test)` | Called when a test has completed successfully |
| [`unittest.TestResult.addUnexpectedSuccess`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.addUnexpectedSuccess) | 方法 | `(self, test)` | Called when a test was expected to fail, but succeed. |
| [`unittest.TestResult.buffer`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.buffer) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.collectedDurations`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.collectedDurations) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.errors`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.errors) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.expectedFailures`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.expectedFailures) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.failfast`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.failfast) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.failures`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.failures) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.shouldStop`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.shouldStop) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.skipped`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.skipped) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.startTest`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.startTest) | 方法 | `(self, test)` | Called when the given test is about to be run |
| [`unittest.TestResult.startTestRun`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.startTestRun) | 方法 | `(self)` | Called once before any tests are executed. |
| [`unittest.TestResult.stop`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.stop) | 方法 | `(self)` | Indicates that the tests should be aborted. |
| [`unittest.TestResult.stopTest`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.stopTest) | 方法 | `(self, test)` | Called when the given test has been run |
| [`unittest.TestResult.stopTestRun`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.stopTestRun) | 方法 | `(self)` | Called once after all tests are executed. |
| [`unittest.TestResult.tb_locals`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.tb_locals) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.testsRun`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.testsRun) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.unexpectedSuccesses`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.unexpectedSuccesses) | 属性 | `` | 参见官方 API 文档。 |
| [`unittest.TestResult.wasSuccessful`](https://docs.python.org/3.12/library/unittest.html#unittest.TestResult.wasSuccessful) | 方法 | `(self)` | Tells whether or not this result was a success. |

## `unittest.TestSuite`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.TestSuite.addTest`](https://docs.python.org/3.12/library/unittest.html#unittest.TestSuite.addTest) | 方法 | `(self, test)` | 参见官方 API 文档。 |
| [`unittest.TestSuite.addTests`](https://docs.python.org/3.12/library/unittest.html#unittest.TestSuite.addTests) | 方法 | `(self, tests)` | 参见官方 API 文档。 |
| [`unittest.TestSuite.countTestCases`](https://docs.python.org/3.12/library/unittest.html#unittest.TestSuite.countTestCases) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`unittest.TestSuite.debug`](https://docs.python.org/3.12/library/unittest.html#unittest.TestSuite.debug) | 方法 | `(self)` | Run the tests without collecting errors in a TestResult |
| [`unittest.TestSuite.run`](https://docs.python.org/3.12/library/unittest.html#unittest.TestSuite.run) | 方法 | `(self, result, debug=False)` | 参见官方 API 文档。 |

## `unittest.TextTestRunner`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`unittest.TextTestRunner.run`](https://docs.python.org/3.12/library/unittest.html#unittest.TextTestRunner.run) | 方法 | `(self, test)` | Run the given test case or test suite. |
