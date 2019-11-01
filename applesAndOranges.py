def countApplesAndOranges(s, t, a, b, apples, oranges):

    appleCount = 0
    orangeCount = 0

    for x in apples:
        if x + a >= s and x + a <= t:
            appleCount += 1

    for x in oranges:
        if x + b <= t and x + b >= s:
            orangeCount += 1

    print(appleCount)
    print(orangeCount)
