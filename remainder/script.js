document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reminder-form");
    const reminderList = document.getElementById("reminder-list");
  
    // Add reminder
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const title = document.getElementById("reminder-title").value;
      const date = document.getElementById("reminder-date").value;
      const time = document.getElementById("reminder-time").value;
  
      if (title && date && time) {
        const reminder = {
          title,
          date,
          time,
        };
  
        addReminderToList(reminder);
        setReminderNotification(reminder);
  
        // Clear form
        form.reset();
      }
    });
  
    // Add reminder to list
    function addReminderToList(reminder) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${reminder.title} - ${reminder.date} at ${reminder.time}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      // Delete reminder
      listItem.querySelector(".delete-btn").addEventListener("click", function () {
        listItem.remove();
      });
  
      reminderList.appendChild(listItem);
    }
  
    // Set reminder notification
    function setReminderNotification(reminder) {
      const reminderDateTime = new Date(`${reminder.date}T${reminder.time}`);
      const currentTime = new Date();
  
      const timeDifference = reminderDateTime - currentTime;
  
      if (timeDifference > 0) {
        setTimeout(function () {
          alert(`Reminder: ${reminder.title}`);
        }, timeDifference);
      }
    }
  });
  