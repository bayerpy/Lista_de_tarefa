$(document).ready(function() {
    
    function adicionarTarefa() {
        var tarefa = $('#tarefa').val(); 
        $('#lista-tarefas').append('<li>' + tarefa + '</li>');  
        $('#tarefa').val('');  
    }

    function marcarConcluido() {
        $(this).toggleClass('concluido');  
    }

    $('#adicionar').on('click', adicionarTarefa);

    $('#lista-tarefas').on('click', 'li', marcarConcluido);
});

 
