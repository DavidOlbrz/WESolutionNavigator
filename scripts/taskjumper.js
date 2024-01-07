function jumpToTask(taskNo) {
    if (taskNo !== '0') {
        const number = taskNo < 10 ? '0' + taskNo : '' + taskNo;
        location.href = '/uebung' + number + '/index.html';
    }
}