$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) 00000-0000'
    })

    $('#nascimento').mask('00/00/0000', {
        placeholder: '__/__/____' 
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Insira seu nome completo',
            telefone: 'Digite seu telefone com o DDD',
            email: 'Insira um email válido'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos ou não preenchidos`);
            } 
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})