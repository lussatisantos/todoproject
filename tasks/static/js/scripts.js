$(document).ready(function() {

    let deleteBtn = $('.delete-btn');

    $(deleteBtn).on('click', function(e) {
        
        e.preventDefault();

        let delLink = $(this).attr('href');
        let result = confirm('Quer deletar esta tarefa?');

        if(result) {
            window.location.href = delLink;
        }
    });
    
});