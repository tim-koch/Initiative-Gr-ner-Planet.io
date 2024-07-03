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
    
    // Initialize DataTable if not already initialized
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
});

// Function to escape HTML
function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}
