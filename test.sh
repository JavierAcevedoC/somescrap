max=167
for i in `seq 2 $max`
do
  npm run start -- "https://ethiopiatigraywar.com/victims.php?page_no=$i" >> victims/pag$i.txt  
done
