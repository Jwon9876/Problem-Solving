import Foundation

let rect = readLine()!.split(separator: " ").map { Int($0)! }
let height = rect[0]
let width = rect[1]
var map = Array(repeating: [String](), count: height)
var maxValue = -1
for i in 0..<height
{
    map[i] = readLine()!.map { String($0) }
}

// 0 1
for i in 0..<height
{
    // 0 1 2
    for j in 0..<width
    {
        for y in ((height - 1) * -1)..<height
        {
            for x in ((width - 1) * -1)..<width {


                var curY = i
                var curX = j
                
                var sumStr = ""
                var sum = 0

                while((0 <= curX && curX < width) && (0 <= curY && curY < height)) {
                    sumStr += map[curY][curX]
                    sum = Int(sumStr)!
                    
//                    var sqrt = sqrt(Double(sum))
//                    sqrt = Int(sqrt)
                    
                    var sqrt = Int(sqrt(Double(sum)))
                    
                    if sqrt * sqrt == sum {
                        maxValue = max(maxValue, sum)
                    }
                    
                    if y == x && x == 0{
                        break
                    }
                    
                    curY += y
                    curX += x

                }
            }
        }
    }
}


print(maxValue)
