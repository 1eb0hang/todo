
compile:
	mvn clean compile

run:
	mvn exec:java -Dexec.mainClass="com.wren.web.Web" -Dexec.args="/home/lebo/Dev/PROJECTS/web/todo"
