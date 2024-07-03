$(document).ready(function() {
    if (!$.fn.DataTable.isDataTable('#emissions-table')) {
        $('#emissions-table').DataTable({
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
    }

    $('#menu-toggle').click(function() {
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

    // Check the direction and adjust the menu alignment
    if ($('html').attr('dir') === 'rtl') {
        $('nav ul.nav-list').addClass('rtl');
    }
});

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}
