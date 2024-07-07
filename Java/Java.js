$(document).ready(function() {
    console.log('Document is ready');

    // Click event for the menu button
    $('#menu-toggle').click(function() {
        console.log('Menu button clicked');
        $('nav ul').toggleClass('show');
    });

    // Hover effect for navigation items with dropdowns
    $('nav ul li').hover(
        function () {
            $(this).children('ul').stop().slideDown(500);
        },
        function () {
            $(this).children('ul').stop().slideUp(500);
        }
    );

    // Check the direction and adjust the menu alignment
    if ($('html').attr('dir') === 'rtl') {
        $('nav ul.nav-list').addClass('rtl');
    }

    // Initialize DataTable
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

    // Load CO2 emissions data from JSON file
    $.getJSON('data/co2-emissions.json', function(data) {
        console.log('Data loaded:', data); // Log data for debugging
        data.forEach(function(item) {
            table.row.add([
                item.land,
                item.unternehmen,
                item.co2Emissionen
            ]).draw(false);
        });
        console.log('Table updated'); // Log when the table is updated
    }).fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err); // Log errors
    });
});
