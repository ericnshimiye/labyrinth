const mazeDefinition = [
    [ // 1
        {top: 1, right: 1, left: 0, bottom: 1}, // 1
        {top: 0, right: 1, left: 1, bottom: 0}, // 2
        {top: 0, right: 0, left: 1, bottom: 1}, // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 4
        {top: 0, right: 1, left: 1, bottom: 0}, // 5
        {top: 0, right: 1, left: 1, bottom: 1}, // 6
        {top: 0, right: 0, left: 1, bottom: 0}, // 7
        {top: 0, right: 1, left: 0, bottom: 1}, // 8
        {top: 0, right: 0, left: 1, bottom: 0}, // 9
        {top: 0, right: 1, left: 0, bottom: 1}, // 10
        {top: 0, right: 0, left: 1, bottom: 1}, // 11
        {top: 0, right: 1, left: 0, bottom: 0}, // 12
        {top: 0, right: 1, left: 1, bottom: 1}, // 13
        {top: 0, right: 0, left: 1, bottom: 1}, // 14
        {top: 0, right: 1, left: 0, bottom: 1}, // 15
        {top: 0, right: 0, left: 1, bottom: 1}, // 16
        {top: 0, right: 1, left: 0, bottom: 1}, // 17
        {top: 0, right: 0, left: 1, bottom: 1}, // 18
        {top: 0, right: 1, left: 0, bottom: 0}, // 19
        {top: 0, right: 0, left: 1, bottom: 1} // 20
    ],
    [ // 2
        {top: 1, right: 1, left: 0, bottom: 0}, // 1
        {top: 0, right: 0, left: 1, bottom: 1}, // 2
        {top: 1, right: 0, left: 0, bottom: 0}, // 3
        {top: 1, right: 1, left: 0, bottom: 0}, // 4
        {top: 0, right: 0, left: 1, bottom: 1}, // 5
        {top: 1, right: 1, left: 0, bottom: 1}, // 6
        {top: 0, right: 0, left: 1, bottom: 1}, // 7
        {top: 1, right: 1, left: 0, bottom: 0}, // 8
        {top: 0, right: 0, left: 1, bottom: 1}, // 9
        {top: 1, right: 0, left: 0, bottom: 1}, // 10
        {top: 1, right: 1, left: 0, bottom: 1}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 1, right: 0, left: 1, bottom: 0}, // 13
        {top: 1, right: 1, left: 0, bottom: 0}, // 14
        {top: 1, right: 0, left: 1, bottom: 0}, // 15
        {top: 1, right: 0, left: 0, bottom: 1}, // 16
        {top: 1, right: 0, left: 0, bottom: 1}, // 17
        {top: 1, right: 1, left: 0, bottom: 0}, // 18
        {top: 0, right: 1, left: 1, bottom: 0}, // 19
        {top: 1, right: 0, left: 1, bottom: 1} // 20
    ],
    [ // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 1
        {top: 1, right: 0, left: 1, bottom: 0}, // 2
        {top: 0, right: 1, left: 0, bottom: 1}, // 3
        {top: 0, right: 1, left: 1, bottom: 0}, // 4
        {top: 1, right: 0, left: 1, bottom: 0}, // 5
        {top: 1, right: 0, left: 0, bottom: 0}, // 6
        {top: 1, right: 1, left: 0, bottom: 0}, // 7
        {top: 0, right: 0, left: 1, bottom: 1}, // 8
        {top: 1, right: 0, left: 0, bottom: 1}, // 9
        {top: 1, right: 0, left: 0, bottom: 1}, // 10
        {top: 1, right: 1, left: 0, bottom: 0}, // 11
        {top: 0, right: 0, left: 1, bottom: 1}, // 12
        {top: 0, right: 1, left: 0, bottom: 0}, // 13
        {top: 0, right: 1, left: 1, bottom: 0}, // 14
        {top: 0, right: 1, left: 1, bottom: 0}, // 15
        {top: 1, right: 1, left: 1, bottom: 0}, // 16
        {top: 1, right: 0, left: 1, bottom: 0}, // 17
        {top: 0, right: 1, left: 0, bottom: 1}, // 18
        {top: 0, right: 1, left: 1, bottom: 1}, // 19
        {top: 1, right: 0, left: 1, bottom: 0} // 20
    ],
    [ // 4
        {top: 1, right: 1, left: 0, bottom: 0}, // 1
        {top: 0, right: 0, left: 1, bottom: 1}, // 2
        {top: 1, right: 0, left: 0, bottom: 1}, // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 4
        {top: 0, right: 0, left: 1, bottom: 1}, // 5
        {top: 0, right: 1, left: 0, bottom: 1}, // 6
        {top: 0, right: 1, left: 1, bottom: 0}, // 7
        {top: 1, right: 0, left: 1, bottom: 0}, // 8
        {top: 1, right: 1, left: 0, bottom: 0}, // 9
        {top: 1, right: 0, left: 1, bottom: 0}, // 10
        {top: 0, right: 1, left: 0, bottom: 0}, // 11
        {top: 1, right: 1, left: 1, bottom: 0}, // 12
        {top: 0, right: 0, left: 1, bottom: 1}, // 13
        {top: 0, right: 1, left: 0, bottom: 1}, // 14
        {top: 0, right: 1, left: 1, bottom: 0}, // 15
        {top: 0, right: 0, left: 1, bottom: 1}, // 16
        {top: 0, right: 1, left: 0, bottom: 1}, // 17
        {top: 1, right: 0, left: 1, bottom: 0}, // 18
        {top: 1, right: 1, left: 0, bottom: 0}, // 19
        {top: 0, right: 0, left: 1, bottom: 1} // 20
    ],
    [ // 5
        {top: 0, right: 0, left: 0, bottom: 1}, // 1
        {top: 1, right: 0, left: 0, bottom: 1}, // 2
        {top: 1, right: 0, left: 0, bottom: 1}, // 3
        {top: 1, right: 0, left: 0, bottom: 1}, // 4
        {top: 1, right: 0, left: 0, bottom: 0}, // 5
        {top: 1, right: 1, left: 0, bottom: 1}, // 6
        {top: 0, right: 1, left: 1, bottom: 0}, // 7
        {top: 0, right: 1, left: 1, bottom: 1}, // 8
        {top: 0, right: 1, left: 1, bottom: 0}, // 9
        {top: 0, right: 0, left: 1, bottom: 1}, // 10
        {top: 0, right: 1, left: 0, bottom: 1}, // 11
        {top: 0, right: 0, left: 1, bottom: 0}, // 12
        {top: 1, right: 0, left: 0, bottom: 1}, // 13
        {top: 1, right: 1, left: 0, bottom: 0}, // 14
        {top: 0, right: 0, left: 1, bottom: 0}, // 15
        {top: 1, right: 1, left: 0, bottom: 0}, // 16
        {top: 1, right: 0, left: 1, bottom: 0}, // 17
        {top: 0, right: 1, left: 0, bottom: 1}, // 18
        {top: 0, right: 0, left: 1, bottom: 1}, // 19
        {top: 1, right: 0, left: 0, bottom: 1} // 20
    ],
    [ // 6
        {top: 1, right: 0, left: 0, bottom: 1}, // 1
        {top: 1, right: 0, left: 0, bottom: 1}, // 2
        {top: 1, right: 1, left: 0, bottom: 1}, // 3
        {top: 1, right: 0, left: 1, bottom: 1}, // 4
        {top: 0, right: 1, left: 0, bottom: 1}, // 5
        {top: 1, right: 0, left: 1, bottom: 0}, // 6
        {top: 0, right: 0, left: 0, bottom: 1}, // 7
        {top: 1, right: 0, left: 0, bottom: 1}, // 8
        {top: 0, right: 1, left: 0, bottom: 0}, // 9
        {top: 1, right: 1, left: 1, bottom: 0}, // 10
        {top: 1, right: 0, left: 1, bottom: 1}, // 11
        {top: 0, right: 1, left: 0, bottom: 1}, // 12
        {top: 1, right: 0, left: 1, bottom: 0}, // 13
        {top: 0, right: 1, left: 0, bottom: 1}, // 14
        {top: 0, right: 0, left: 1, bottom: 1}, // 15
        {top: 0, right: 1, left: 0, bottom: 1}, // 16
        {top: 0, right: 0, left: 1, bottom: 1}, // 17
        {top: 1, right: 0, left: 0, bottom: 0}, // 18
        {top: 1, right: 1, left: 0, bottom: 1}, // 19
        {top: 1, right: 0, left: 1, bottom: 0} // 20
    ],
    [ // 7
        {top: 1, right: 0, left: 0, bottom: 1}, // 1
        {top: 1, right: 1, left: 0, bottom: 0}, // 2
        {top: 1, right: 0, left: 1, bottom: 0}, // 3
        {top: 1, right: 0, left: 0, bottom: 1}, // 4
        {top: 1, right: 1, left: 0, bottom: 0}, // 5
        {top: 0, right: 0, left: 1, bottom: 1}, // 6
        {top: 1, right: 1, left: 0, bottom: 0}, // 7
        {top: 1, right: 0, left: 1, bottom: 0}, // 8
        {top: 0, right: 1, left: 0, bottom: 1}, // 9
        {top: 0, right: 0, left: 1, bottom: 1}, // 10
        {top: 1, right: 0, left: 0, bottom: 0}, // 11
        {top: 1, right: 1, left: 0, bottom: 0}, // 12
        {top: 0, right: 1, left: 1, bottom: 0}, // 13
        {top: 1, right: 0, left: 1, bottom: 0}, // 14
        {top: 1, right: 0, left: 0, bottom: 1}, // 15
        {top: 1, right: 0, left: 0, bottom: 1}, // 16
        {top: 1, right: 1, left: 0, bottom: 0}, // 17
        {top: 0, right: 1, left: 1, bottom: 0}, // 18
        {top: 1, right: 0, left: 1, bottom: 0}, // 19
        {top: 0, right: 0, left: 0, bottom: 1} // 20
    ],
    [ // 8
        {top: 1, right: 1, left: 0, bottom: 1}, // 1
        {top: 0, right: 0, left: 1, bottom: 0}, // 2
        {top: 0, right: 1, left: 0, bottom: 1}, // 3
        {top: 1, right: 1, left: 1, bottom: 0}, // 4
        {top: 0, right: 0, left: 1, bottom: 1}, // 5
        {top: 1, right: 1, left: 0, bottom: 0}, // 6
        {top: 0, right: 0, left: 1, bottom: 1}, // 7
        {top: 0, right: 1, left: 0, bottom: 1}, // 8
        {top: 1, right: 0, left: 1, bottom: 0}, // 9
        {top: 1, right: 1, left: 0, bottom: 0}, // 10
        {top: 0, right: 1, left: 1, bottom: 0}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 0, right: 1, left: 1, bottom: 1}, // 13
        {top: 0, right: 1, left: 1, bottom: 0}, // 14
        {top: 1, right: 0, left: 1, bottom: 0}, // 15
        {top: 1, right: 1, left: 0, bottom: 1}, // 16
        {top: 0, right: 1, left: 1, bottom: 1}, // 17
        {top: 0, right: 1, left: 1, bottom: 0}, // 18
        {top: 0, right: 1, left: 1, bottom: 0}, // 19
        {top: 1, right: 0, left: 1, bottom: 0} // 20
    ],
    [ // 9
        {top: 1, right: 0, left: 0, bottom: 1}, // 1
        {top: 0, right: 1, left: 0, bottom: 1}, // 2
        {top: 1, right: 0, left: 1, bottom: 0}, // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 4
        {top: 1, right: 0, left: 1, bottom: 1}, // 5
        {top: 0, right: 1, left: 0, bottom: 1}, // 6
        {top: 1, right: 1, left: 1, bottom: 0}, // 7
        {top: 1, right: 0, left: 1, bottom: 1}, // 8
        {top: 0, right: 1, left: 0, bottom: 1}, // 9
        {top: 0, right: 1, left: 1, bottom: 0}, // 10
        {top: 0, right: 1, left: 1, bottom: 0}, // 11
        {top: 0, right: 0, left: 1, bottom: 0}, // 12
        {top: 1, right: 0, left: 0, bottom: 1}, // 13
        {top: 0, right: 1, left: 0, bottom: 1}, // 14
        {top: 0, right: 0, left: 1, bottom: 1}, // 15
        {top: 1, right: 0, left: 0, bottom: 1}, // 16
        {top: 1, right: 1, left: 0, bottom: 0}, // 17
        {top: 0, right: 0, left: 1, bottom: 1}, // 18
        {top: 0, right: 1, left: 0, bottom: 1}, // 19
        {top: 0, right: 0, left: 1, bottom: 1} // 20
    ],
    [ // 10
        {top: 1, right: 1, left: 0, bottom: 0}, // 1
        {top: 1, right: 0, left: 1, bottom: 0}, // 2
        {top: 0, right: 1, left: 0, bottom: 1}, // 3
        {top: 1, right: 0, left: 1, bottom: 0}, // 4
        {top: 1, right: 0, left: 0, bottom: 1}, // 5
        {top: 1, right: 0, left: 0, bottom: 1}, // 6
        {top: 0, right: 1, left: 0, bottom: 0}, // 7
        {top: 1, right: 0, left: 1, bottom: 0}, // 8
        {top: 1, right: 1, left: 0, bottom: 0}, // 9
        {top: 0, right: 1, left: 1, bottom: 0}, // 10
        {top: 0, right: 1, left: 1, bottom: 0}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 1, right: 0, left: 1, bottom: 0}, // 13
        {top: 1, right: 0, left: 0, bottom: 1}, // 14
        {top: 1, right: 1, left: 0, bottom: 0}, // 15
        {top: 1, right: 0, left: 1, bottom: 0}, // 16
        {top: 0, right: 1, left: 0, bottom: 0}, // 17
        {top: 1, right: 0, left: 1, bottom: 1}, // 18
        {top: 1, right: 0, left: 0, bottom: 1}, // 19
        {top: 1, right: 0, left: 0, bottom: 0} // 20
    ],
    [ // 11
        {top: 0, right: 0, left: 0, bottom: 1}, // 1
        {top: 0, right: 1, left: 0, bottom: 1}, // 2
        {top: 1, right: 0, left: 1, bottom: 0}, // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 4
        {top: 1, right: 0, left: 1, bottom: 0}, // 5
        {top: 1, right: 1, left: 0, bottom: 0}, // 6
        {top: 0, right: 0, left: 1, bottom: 1}, // 7
        {top: 0, right: 0, left: 0, bottom: 1}, // 8
        {top: 0, right: 1, left: 0, bottom: 1}, // 9
        {top: 0, right: 0, left: 1, bottom: 1}, // 10
        {top: 0, right: 1, left: 0, bottom: 0}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 0, right: 0, left: 1, bottom: 1}, // 13
        {top: 1, right: 0, left: 0, bottom: 1}, // 14
        {top: 0, right: 1, left: 0, bottom: 1}, // 15
        {top: 0, right: 0, left: 1, bottom: 1}, // 16
        {top: 0, right: 1, left: 0, bottom: 1}, // 17
        {top: 1, right: 1, left: 1, bottom: 0}, // 18
        {top: 1, right: 0, left: 1, bottom: 0}, // 19
        {top: 0, right: 0, left: 0, bottom: 1} // 20
    ],
    [ // 12
        {top: 1, right: 1, left: 0, bottom: 0}, // 1
        {top: 1, right: 1, left: 1, bottom: 0}, // 2
        {top: 0, right: 0, left: 1, bottom: 0}, // 3
        {top: 1, right: 1, left: 0, bottom: 0}, // 4
        {top: 0, right: 0, left: 1, bottom: 1}, // 5
        {top: 0, right: 1, left: 0, bottom: 1}, // 6
        {top: 1, right: 0, left: 1, bottom: 0}, // 7
        {top: 1, right: 1, left: 0, bottom: 0}, // 8
        {top: 1, right: 0, left: 1, bottom: 0}, // 9
        {top: 1, right: 1, left: 0, bottom: 0}, // 10
        {top: 0, right: 1, left: 1, bottom: 1}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 1, right: 0, left: 1, bottom: 0}, // 13
        {top: 1, right: 1, left: 0, bottom: 0}, // 14
        {top: 1, right: 0, left: 1, bottom: 0}, // 15
        {top: 1, right: 1, left: 0, bottom: 0}, // 16
        {top: 1, right: 0, left: 1, bottom: 1}, // 17
        {top: 0, right: 1, left: 0, bottom: 1}, // 18
        {top: 0, right: 1, left: 1, bottom: 0}, // 19
        {top: 1, right: 0, left: 1, bottom: 0} // 20
    ],
    [ // 13
        {top: 0, right: 0, left: 0, bottom: 1}, // 1
        {top: 0, right: 1, left: 0, bottom: 1}, // 2
        {top: 0, right: 1, left: 1, bottom: 1}, // 3
        {top: 0, right: 1, left: 1, bottom: 0}, // 4
        {top: 1, right: 0, left: 1, bottom: 0}, // 5
        {top: 1, right: 1, left: 0, bottom: 0}, // 6
        {top: 0, right: 1, left: 1, bottom: 0}, // 7
        {top: 0, right: 0, left: 1, bottom: 1}, // 8
        {top: 0, right: 0, left: 0, bottom: 1}, // 9
        {top: 0, right: 1, left: 0, bottom: 1}, // 10
        {top: 1, right: 0, left: 1, bottom: 1}, // 11
        {top: 0, right: 1, left: 0, bottom: 0}, // 12
        {top: 0, right: 0, left: 1, bottom: 1}, // 13
        {top: 0, right: 1, left: 0, bottom: 1}, // 14
        {top: 0, right: 1, left: 1, bottom: 0}, // 15
        {top: 0, right: 0, left: 1, bottom: 0}, // 16
        {top: 1, right: 0, left: 0, bottom: 1}, // 17
        {top: 1, right: 1, left: 0, bottom: 0}, // 18
        {top: 0, right: 1, left: 1, bottom: 0}, // 19
        {top: 0, right: 0, left: 1, bottom: 1} // 20
    ],
    [ // 14
        {top: 1, right: 1, left: 0, bottom: 0}, // 1
        {top: 1, right: 0, left: 1, bottom: 0}, // 2
        {top: 1, right: 1, left: 0, bottom: 1}, // 3
        {top: 0, right: 1, left: 1, bottom: 0}, // 4
        {top: 0, right: 0, left: 1, bottom: 0}, // 5
        {top: 0, right: 1, left: 0, bottom: 1}, // 6
        {top: 0, right: 1, left: 1, bottom: 0}, // 7
        {top: 1, right: 0, left: 1, bottom: 0}, // 8
        {top: 1, right: 0, left: 0, bottom: 1}, // 9
        {top: 1, right: 0, left: 0, bottom: 1}, // 10
        {top: 1, right: 1, left: 0, bottom: 0}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 1, right: 1, left: 1, bottom: 0}, // 13
        {top: 1, right: 1, left: 1, bottom: 0}, // 14
        {top: 0, right: 1, left: 1, bottom: 0}, // 15
        {top: 0, right: 0, left: 1, bottom: 1}, // 16
        {top: 1, right: 1, left: 0, bottom: 0}, // 17
        {top: 0, right: 1, left: 1, bottom: 0}, // 18
        {top: 0, right: 0, left: 1, bottom: 0}, // 19
        {top: 1, right: 0, left: 0, bottom: 1} // 20
    ],
    [ // 15
        {top: 0, right: 1, left: 0, bottom: 1}, // 1
        {top: 0, right: 0, left: 1, bottom: 1}, // 2
        {top: 1, right: 0, left: 0, bottom: 0}, // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 4
        {top: 0, right: 0, left: 1, bottom: 1}, // 5
        {top: 1, right: 0, left: 0, bottom: 1}, // 6
        {top: 0, right: 0, left: 0, bottom: 1}, // 7
        {top: 0, right: 1, left: 0, bottom: 1}, // 8
        {top: 1, right: 0, left: 1, bottom: 1}, // 9
        {top: 1, right: 1, left: 0, bottom: 0}, // 10
        {top: 0, right: 1, left: 1, bottom: 0}, // 11
        {top: 0, right: 0, left: 1, bottom: 1}, // 12
        {top: 0, right: 1, left: 0, bottom: 0}, // 13
        {top: 0, right: 1, left: 1, bottom: 0}, // 14
        {top: 0, right: 0, left: 1, bottom: 1}, // 15
        {top: 1, right: 1, left: 0, bottom: 1}, // 16
        {top: 0, right: 1, left: 1, bottom: 0}, // 17
        {top: 0, right: 0, left: 1, bottom: 0}, // 18
        {top: 0, right: 1, left: 0, bottom: 1}, // 19
        {top: 1, right: 0, left: 1, bottom: 0} // 20
    ],
    [ // 16
        {top: 1, right: 0, left: 0, bottom: 1}, // 1
        {top: 1, right: 0, left: 0, bottom: 1}, // 2
        {top: 0, right: 1, left: 0, bottom: 1}, // 3
        {top: 1, right: 0, left: 1, bottom: 0}, // 4
        {top: 1, right: 1, left: 0, bottom: 0}, // 5
        {top: 1, right: 0, left: 1, bottom: 0}, // 6
        {top: 1, right: 1, left: 0, bottom: 0}, // 7
        {top: 1, right: 0, left: 1, bottom: 0}, // 8
        {top: 1, right: 1, left: 0, bottom: 0}, // 9
        {top: 0, right: 1, left: 1, bottom: 0}, // 10
        {top: 0, right: 1, left: 1, bottom: 0}, // 11
        {top: 1, right: 0, left: 1, bottom: 0}, // 12
        {top: 0, right: 1, left: 0, bottom: 0}, // 13
        {top: 0, right: 1, left: 1, bottom: 0}, // 14
        {top: 1, right: 0, left: 1, bottom: 0}, // 15
        {top: 1, right: 1, left: 0, bottom: 0}, // 16
        {top: 0, right: 1, left: 1, bottom: 0}, // 17
        {top: 0, right: 0, left: 1, bottom: 1}, // 18
        {top: 1, right: 1, left: 0, bottom: 1}, // 19
        {top: 0, right: 0, left: 1, bottom: 1} // 20
    ],
    [ // 17
        {top: 1, right: 0, left: 0, bottom: 1}, // 1
        {top: 1, right: 1, left: 0, bottom: 0}, // 2
        {top: 1, right: 0, left: 1, bottom: 0}, // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 4
        {top: 0, right: 1, left: 1, bottom: 0}, // 5
        {top: 0, right: 1, left: 1, bottom: 0}, // 6
        {top: 0, right: 1, left: 1, bottom: 0}, // 7
        {top: 0, right: 0, left: 1, bottom: 1}, // 8
        {top: 0, right: 1, left: 0, bottom: 1}, // 9
        {top: 0, right: 0, left: 1, bottom: 1}, // 10
        {top: 0, right: 1, left: 0, bottom: 0}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 0, right: 0, left: 1, bottom: 0}, // 13
        {top: 0, right: 1, left: 0, bottom: 1}, // 14
        {top: 0, right: 1, left: 1, bottom: 0}, // 15
        {top: 0, right: 1, left: 1, bottom: 0}, // 16
        {top: 0, right: 1, left: 1, bottom: 0}, // 17
        {top: 1, right: 0, left: 1, bottom: 1}, // 18
        {top: 1, right: 0, left: 0, bottom: 1}, // 19
        {top: 1, right: 0, left: 0, bottom: 1} // 20
    ],
    [ // 18
        {top: 1, right: 1, left: 0, bottom: 0}, // 1
        {top: 0, right: 1, left: 1, bottom: 0}, // 2
        {top: 0, right: 0, left: 1, bottom: 1}, // 3
        {top: 1, right: 1, left: 0, bottom: 0}, // 4
        {top: 0, right: 1, left: 1, bottom: 0}, // 5
        {top: 0, right: 1, left: 1, bottom: 1}, // 6
        {top: 0, right: 0, left: 1, bottom: 0}, // 7
        {top: 1, right: 1, left: 0, bottom: 0}, // 8
        {top: 1, right: 0, left: 1, bottom: 0}, // 9
        {top: 1, right: 1, left: 0, bottom: 0}, // 10
        {top: 0, right: 1, left: 1, bottom: 0}, // 11
        {top: 0, right: 0, left: 1, bottom: 1}, // 12
        {top: 0, right: 1, left: 0, bottom: 1}, // 13
        {top: 1, right: 0, left: 1, bottom: 0}, // 14
        {top: 0, right: 1, left: 0, bottom: 1}, // 15
        {top: 0, right: 1, left: 1, bottom: 1}, // 16
        {top: 0, right: 0, left: 1, bottom: 1}, // 17
        {top: 1, right: 0, left: 0, bottom: 0}, // 18
        {top: 1, right: 0, left: 0, bottom: 0}, // 19
        {top: 1, right: 0, left: 0, bottom: 1} // 20
    ],
    [ // 19
        {top: 0, right: 1, left: 0, bottom: 1}, // 1
        {top: 0, right: 1, left: 1, bottom: 0}, // 2
        {top: 1, right: 0, left: 1, bottom: 0}, // 3
        {top: 0, right: 1, left: 0, bottom: 1}, // 4
        {top: 0, right: 1, left: 1, bottom: 0}, // 5
        {top: 1, right: 0, left: 1, bottom: 0}, // 6
        {top: 0, right: 1, left: 0, bottom: 1}, // 7
        {top: 0, right: 1, left: 1, bottom: 0}, // 8
        {top: 0, right: 1, left: 1, bottom: 0}, // 9
        {top: 0, right: 0, left: 1, bottom: 1}, // 10
        {top: 0, right: 1, left: 0, bottom: 1}, // 11
        {top: 1, right: 0, left: 1, bottom: 0}, // 12
        {top: 1, right: 1, left: 0, bottom: 0}, // 13
        {top: 0, right: 1, left: 1, bottom: 0}, // 14
        {top: 1, right: 0, left: 1, bottom: 0}, // 15
        {top: 1, right: 0, left: 0, bottom: 1}, // 16
        {top: 1, right: 0, left: 0, bottom: 1}, // 17
        {top: 0, right: 1, left: 0, bottom: 1}, // 18
        {top: 0, right: 0, left: 1, bottom: 1}, // 19
        {top: 1, right: 0, left: 0, bottom: 0} // 20
    ],
    [ // 20
        {top: 1, right: 1, left: 0, bottom: 0}, // 1
        {top: 0, right: 1, left: 1, bottom: 0}, // 2
        {top: 0, right: 1, left: 1, bottom: 0}, // 3
        {top: 1, right: 1, left: 1, bottom: 0}, // 4
        {top: 0, right: 1, left: 1, bottom: 0}, // 5
        {top: 0, right: 1, left: 1, bottom: 0}, // 6
        {top: 1, right: 0, left: 1, bottom: 0}, // 7
        {top: 0, right: 1, left: 0, bottom: 0}, // 8
        {top: 0, right: 1, left: 1, bottom: 0}, // 9
        {top: 1, right: 0, left: 1, bottom: 0}, // 10
        {top: 1, right: 1, left: 0, bottom: 0}, // 11
        {top: 0, right: 1, left: 1, bottom: 0}, // 12
        {top: 0, right: 1, left: 1, bottom: 0}, // 13
        {top: 0, right: 1, left: 1, bottom: 0}, // 14
        {top: 0, right: 1, left: 1, bottom: 0}, // 15
        {top: 1, right: 0, left: 1, bottom: 0}, // 16
        {top: 1, right: 1, left: 0, bottom: 0}, // 17
        {top: 1, right: 0, left: 1, bottom: 0}, // 18
        {top: 1, right: 1, left: 0, bottom: 0}, // 19
        {top: 0, right: 1, left: 1, bottom: 0} // 20
    ]
];

module.exports = mazeDefinition;
