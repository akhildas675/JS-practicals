/**
 * 
 
A factory function in JavaScript is a function that creates and returns an object. It is a way of creating and returning objects in a more controlled and customizable manner. 


 * 
 */


function details(name,age){
    return {
        name,
        age,
        user(){
            return "hai "+this.name+' my age is '+ this.age
        }
    }
}

const display=details("akhildas",23)
console.log(display.user());









































// Task Factory Function
function createTask(type, title, description, dueDate) {
    const baseTask = {
        title,
        description,
        dueDate,
        status: 'incomplete',
        complete() {
            this.status = 'complete';
        }
    };

    switch (type) {
        case 'urgent':
            return {
                ...baseTask,
                priority: 'high',
                remind() {
                    console.log(`Reminder: ${this.title} is due soon!`);
                }
            };
        case 'recurring':
            return {
                ...baseTask,
                interval: 'weekly', // Default interval, can be customized
                reschedule() {
                    const nextDate = new Date(this.dueDate);
                    nextDate.setDate(nextDate.getDate() + 7); // Assume weekly interval
                    this.dueDate = nextDate.toISOString().split('T')[0];
                    console.log(`Rescheduled ${this.title} to ${this.dueDate}`);
                }
            };
        default:
            return baseTask;
    }
}

// Creating different types of tasks using the factory function
const task1 = createTask('regular', 'Read a book', 'Read "Clean Code"', '2024-05-30');
const task2 = createTask('urgent', 'Submit report', 'Submit the quarterly report', '2024-05-22');
const task3 = createTask('recurring', 'Exercise', 'Go for a run', '2024-05-23');

// Interacting with tasks
task1.complete();
console.log(task1);

task2.remind();
console.log(task2);

task3.reschedule();
console.log(task3);
