$(document).ready(function() {

    let deleteBtn = $('.delete-btn');
    let seachBtn = $('#search-btn');
    let searchForm = $('.search-form')

    $(deleteBtn).on('click', function(e) {
        
        e.preventDefault();

        let delLink = $(this).attr('href');
        let result = confirm('Quer deletar esta tarefa?');

        if(result) {
            window.location.href = delLink;
        }
    });

    $(seachBtn).on('click', function() {
        searchForm.submit();
    });
    
});