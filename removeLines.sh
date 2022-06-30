max=167
for i in `seq 3 $max`
do
    sed -e '1,6d' < victims/pag$i.txt >> out/pag$i.txt
done