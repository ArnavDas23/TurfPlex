define(['MindFusion.Scheduling'], function(mfScheduleing){
  var calendar = new mfScheduleing.Calendar(document.getElementById('calendar'));
  calendar.monthSettings.showPaddingDays  = false;
  calendar.currentView = mfScheduleing.CalendarView.SingleMonth;
  calendar.theme = "standard";

  var resource;

  // add some contacts to the schedule.contacts collection
  resource = new mfScheduleing.Contact();
  resource.firstName = "Alan";
  resource.lastName = "Vilayil";
  calendar.schedule.contacts.add(resource);

  resource = new mfScheduleing.Contact();
  resource.firstName = "Aditiya";
  resource.lastName = "Karmokar";
  calendar.schedule.contacts.add(resource);

  resource = new mfScheduleing.Contact();
  resource.firstName = "Pratheek";
  resource.lastName = "Hegde";
  calendar.schedule.contacts.add(resource);

  // add some locations to the schedule.locations collection
  resource = new mfScheduleing.Location();
  resource.name = "M.D Cricket Ground";
  calendar.schedule.locations.add(resource);

  resource = new mfScheduleing.Location();
  resource.name = "S.K FOOTBALL Ground";
  calendar.schedule.locations.add(resource);

  resource = new mfScheduleing.Location();
  resource.name = "A.P Tennis Ground";
  calendar.schedule.locations.add(resource);

  resource = new mfScheduleing.Location();
  resource.name = "Fr Agnel Football Ground";
  calendar.schedule.locations.add(resource);

  resource = new mfScheduleing.Location();
  resource.name = "D.J Badminton Court";
  calendar.schedule.locations.add(resource);

  resource = new mfScheduleing.Location();
  resource.name = "M.N Basketball Ground";
  calendar.schedule.locations.add(resource);

  calendar.render();
  /**
  * Loads the schedule from a JSON file
  * @param {String} jsonString the JSON string
  */
  calendar.loadFromJSON = function(jsonString){
    var data = JSON.parse(jsonString);

    for (item in data){

      var newItem = new mfScheduleing.Item();      
      newItem.name = data[item].Name;
      newItem.details = data[item].Details;
      newItem.contacts = data[item].Contacts;
      newItem.location = data[item].Location;
      newItem.Task = data[item].Task;
      newItem.resources = data[item].Resources;
      newItem.startTime = new mfScheduleing.DateTime(new Date(data[item].StartTime));
      newItem.endTime = new mfScheduleing.DateTime(new Date(data[item].EndTime));

      calendar.schedule.items.add(newItem);
    }

    calendar.repaint();
  }

  return calendar;
});
