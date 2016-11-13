
with open('files.txt', 'r+') as f:
	for line in f:
		print "engertlab.fas.harvard.edu/Z-Brain/{}".format(line.rstrip('\n'))
		
