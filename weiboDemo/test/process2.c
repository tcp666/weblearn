#include<stdio.h>
#include<sys/types.h>
#include<unistd.h>
#include<signal.h>
#include<ctype.h>


#define MAX_CHILD_NUMBER 10

#define SLEEP_INTERVAL 2

int proc_number=0;


void do_something(){
for(;;)
{
	printf("This is process No.%d and its pid is%d",proc_number,getpid());
	sleep(SLEEP_INTERVAL);
}
}int main(int argc,char* argv[])
	{
		int child_proc_number=MAX_CHILD_NUMBER;
		int i,ch;
		pid_t child_pid;
		pid_t pid[10]={0};
	    if(argc>1)
	    {
		child_proc_number=atoi(argv[1]);
		child_proc_number=(child_proc_number>10)?10:child_proc_number;
        }

	for(i=0;i<child_proc_number;i++){
		child_pid=fork();
		if(child_pid>0)
		{
			pid[i]=child_pid;
		}
		else if(child_pid==0){
		proc_number=i;
		do_something();
		}
		else{
			printf("fork process faile\n");
		}

	}

	while((ch = getchar())!='q'){
		if(isdigit(ch)){
		    kill(pid[ch-'0'], SIGTERM);
		}
	}
	    kill(0, SIGTERM);
	    return 0;

}
