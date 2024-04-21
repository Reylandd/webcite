document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      select: function(info) {
          document.getElementById('date').value = info.startStr.substring(0, 10);
      }
  });
  calendar.render();
});

$('#bookBtn').on('click', function() {
  var date = $('#date').val();
  var time = $('#time').val();
  if (date && time) {
      alert('Booking confirmed for ' + date + ' at ' + time);
      // Here you can further process the booking, such as sending it to a backend server
  } else {
      alert('Please select both date and time.');
  }
});

