'use strict';

var bio = {
    "name": "Tamar Kornblum",
    "role": "Web developer",
    "contacts": {
        "mobile": "ABC-655-0259",
        "email": "abc.xyz@gmail.com",
        "github": "abcxyz",
        "twitter": "teekers",
        "location": "New York, NY"
    },
    "welcomeMessage": "Hi, I'm Tamar. I'm good at lots of things. You want me on your team.",
    "skills": [
        "HTML", "CSS", "Javascript", "UX design", "Communication", "All around awesomeness"
    ],
    "biopic": "images/tk_headshot.jpg",
    'display': function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
        var pic = HTMLbioPic.replace("%data%", bio.biopic);
        var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts,#footerContacts").append(formattedEmail, formattedPhone, formattedGitHub, formattedLoc);
        $("#header").append(welcomeMsg);
        $("#header").append(pic);

        if (bio.skills.length) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(item) {
                $("#skills").append(HTMLskills.replace("%data%", item));
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "Columbia University",
        "location": "New York, NY",
        "degree": "BA",
        "majors": ["Psychology"],
        "dates": 2004,
        "url": "http://www.columbia.edu"
    }, {
        "name": "CUNY Brooklyn College",
        "location": "New York, NY",
        "degree": "MA",
        "majors": ["Computer Science"],
        "dates": 2015,
        "url": "http://brooklyn.cuny.edu"
    }],
    "onlineCourses": [{
        "title": "User Experience Design Immersive",
        "school": "General Assembly",
        "date": 2013,
        "url": "http://generalassemb.ly"
    }, {
        "title": "Front End Web Development",
        "school": "Udacity",
        "date": 2016,
        "url": "http://udacity.com"
    }],
    'display': function() {
        //first traditional schools
        education.schools.forEach(function(school) {

            var name = HTMLschoolName.replace("%data%", school.name);
            name = name.replace("%URLdata%", school.url);
            var degree = HTMLschoolDegree.replace("%data%", school.degree);
            var dates = HTMLschoolDates.replace("%data%", school.dates);
            var location = HTMLschoolLocation.replace("%data%", school.location);
            var major = HTMLschoolMajor.replace("%data%", school.majors);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(name + degree + dates + location + major);

        });
        //then online courses
        $("#education").append(HTMLonlineClasses); //only needed once

        education.onlineCourses.forEach(function(course) {
            var title = HTMLonlineTitle.replace("%data%", course.title);
            var school = HTMLonlineSchool.replace("%data%", course.school);
            var date = HTMLonlineDates.replace("%data%", course.date);
            var url = HTMLonlineURL.replace("%data%", course.url);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(title + school + date + url);
        });

    }
};

var work = {
    "jobs": [{
        "employer": "For the Win, LLC",
        "title": "Principal",
        "location": "Brooklyn, NY",
        "dates": "2009 - 2015",
        "description": "UX Design, Software development, Problem solving."
    }, {
        "employer": "Apple, Inc",
        "title": "Genius",
        "location": "New York, NY",
        "dates": "2007 - 2009",
        "description": "Diagnosed and fixed hardware and software problems. With a smile."
    }, {
        "employer": "Primate Cognition Lab",
        "title": "Lab Manager",
        "location": "New York, NY",
        "dates": "2004 - 2007",
        "description": "Software & hardware development for monkeys. Training & management of people. Grants, budgets, everything else..."
    }],
    'display': function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var employer = HTMLworkEmployer.replace("%data%", job.employer);
            var title = HTMLworkTitle.replace("%data%", job.title);
            var dates = HTMLworkDates.replace("%data%", job.dates);
            var location = HTMLworkLocation.replace("%data%", job.location);
            var description = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(employer + title + dates + location + description);
        })
    }
};

var projects = {
    "projects": [{
        "title": "Prospect Heights CSA",
        "dates": "2010-present",
        "description": "Manage signup, payment, and backend tech systems for 150 household community organization.",
        "images": ["images/carrot.jpeg", "images/field.jpeg"]
    }, {
        "title": "Programming for Psychology experiments",
        "dates": "2009-present",
        "description": "Product design and development (language: Xojo) for academic applications",
        "images": ["images/laptop.jpeg", "images/glasses.jpeg"]
    }],
    'display': function() {
        projects.projects.forEach(function(entry) {
            $("#projects").append(HTMLprojectStart);

            var title = HTMLprojectTitle.replace("%data%", entry.title);
            var dates = HTMLprojectDates.replace("%data%", entry.dates);
            var description = HTMLprojectDescription.replace("%data%", entry.description);

            $(".project-entry:last").append(title + dates + description);

            for (var i = 0, len = entry.images.length; i < len; i++) {
                var currentImage = HTMLprojectImage.replace("%data%", entry.images[i]);
                $(".project-entry:last").append(currentImage);
            }
        })
    }
};

function inName() {
    var name = bio.name;
    var names = name.split(" ");
    var first = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    var second = names[1].toUpperCase();
    var final = first + " " + second;
    return final;
}


bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
