$(document).ready(function() {
    console.log('Document is ready');

    $('#menu-toggle').click(function() {
        console.log('Menu button clicked');
        $('nav ul').toggleClass('show');
    });

    $('nav ul li').hover(
        function () {
            $(this).children('ul').stop().slideDown(500);
        },
        function () {
            $(this).children('ul').stop().slideUp(500);
        }
    );

    if ($('html').attr('dir') === 'rtl') {
        $('nav ul.nav-list').addClass('rtl');
    }

    var table = $('#emissions-table').DataTable({
        "pageLength": 10,
        "language": {
            "lengthMenu": "Zeige _MENU_ Einträge pro Seite",
            "zeroRecords": "Keine Einträge gefunden",
            "info": "Zeige Seite _PAGE_ von _PAGES_",
            "infoEmpty": "Keine Einträge verfügbar",
            "infoFiltered": "(gefiltert von _MAX_ Einträgen)",
            "search": "Suche:",
            "paginate": {
                "first": "Erste",
                "last": "Letzte",
                "next": "Nächste",
                "previous": "Vorherige"
            }
        }
    });

    $.getJSON('data/co2-emissions.json', function(data) {
        console.log('Data loaded:', data);
        data.forEach(function(item) {
            // Sanitize data before adding to the table
            var sanitizedLand = sanitizeInput(item.land);
            var sanitizedUnternehmen = sanitizeInput(item.unternehmen);
            var sanitizedCo2Emissionen = sanitizeInput(item.co2Emissionen);
            
            table.row.add([
                sanitizedLand,
                sanitizedUnternehmen,
                sanitizedCo2Emissionen
            ]).draw(false);
        });
        console.log('Table updated'); 
    }).fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err); 
    });

    function sanitizeInput(input) {
        return input.replace(/<[^>]*>?/gm, '');
    }
    
    $('#input-field').on('input', function() {
        var sanitizedValue = sanitizeInput($(this).val());
        $(this).val(sanitizedValue);
    });
});
