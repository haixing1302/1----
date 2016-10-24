function func(n) {
	var i = 0,
		k = 2,
		j = 2;
	while(k < n) {
		i = i + 2;
		j = j + 1;
		k = k + j;
	}

	return n - i;
}

var line;
while(line = read_line()){
    line = line.split(' ');
    print(func(line[0]));
}