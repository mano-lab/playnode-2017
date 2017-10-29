// 외부로 노출시키는 함수 타입들
function repeat(count: number, input: string): string
function repeat(input: string, count: number): string
// 내부 구현에 사용되는 함수 타입
function repeat(a: number | string, b: number | string) {
  if (typeof a === 'string') {
    return a.repeat(b as number)
  } else {
    return (b as string).repeat(a)
  }
}

repeat('test', 3)
repeat(3, 'test')
repeat(3, 3)
repeat('test', 'test')
