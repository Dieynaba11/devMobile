function ajouterTache() {
    const task = document.getElementById("task");
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListDone = document.getElementById('taskListDone');

    if (task.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value;
        taskListInProgress.appendChild(newItem);

        $(newItem).on('swiperight', function (e) {
            taskListDone.appendChild(this);
            $(taskListInProgress).listview('refresh');
            $(taskListDone).listview('refresh');
        });

        $(newItem).on('swipeleft', function (e) {
            $(this).hide('slow', function(){
                $(this).remove();
                $(taskListInProgress).listview('refresh');
                $(taskListDone).listview('refresh');
            });
        });

        $(taskListInProgress).listview('refresh');
        $(taskListDone).listview('refresh');
    }
    task.value = '';
    task.focus();
}

function reinitialiserListe() {
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListDone = document.getElementById('taskListDone');
    const task = document.getElementById("task");

    task.value = '';
    taskListInProgress.innerHTML = '';
    taskListDone.innerHTML = '';
    task.focus();

    $(taskListInProgress).listview('refresh');
    $(taskListDone).listview('refresh');
}
