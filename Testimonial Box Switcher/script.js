const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'John Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        text:
        "The Landscaping Professionals were quick, courteous and very helpful. They helped me restore my lawn and gardens completely after putting in my deck. I was worried it wouldn’t be done in time for my garden party, but they finished the job with time to spare!",
    },
    {
        name: 'Shyla Matthews',
        position: 'Finance',
        photo:  'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        text:
        "I ordered a wedding cake for my big day and it was beautiful! It was just what I wanted. I will definitely recommend you to all my friends!",
    },
    {
        name: 'Donna Ranger',
        position: 'Sales',
        photo:  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        text:
        "Local City Restaurant has great food at a great price. The wait staff was friendly and quick, the burgers were top-notch, and we had a great time. We’ll be back soon!",
    },
    {
        name: 'Ronald Seth',
        position: 'Customer Service',
        photo:  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
        text:
        "Our cycling group visited Local Cycling Shop for some much-needed tune-ups in the spring. Some of our bikes had flat tires, issues with gears and brakes, and more. Local Cycling Shop got us all up and running fast and easy, with rates we could all afford. We would all recommend Local Cycling Shop to all the cyclists in town!",
    },
    {
        name: 'Mike Kawos',
        position: 'IT',
        photo:  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
        text:
        "I’ve been an avid reader of Local Happenings Paper since I moved to town 10 years ago, and I’ve always loved your work. I’m contacting you today about your exceptional restaurant review section, Local Foodie Corner. I’ve owned and operated Great Local Restaurant for 8 years and everyone here is very proud of our work!",
    },
]

let idx = 1;

function updateTestimonail() {
   const { name, position, photo, text } = testimonials[idx]; 
    
   testimonial.innerHTML = text;
   userImage.src = photo;
   userName.innerHTML = name;
   role.innerHTML = position;

   idx++;
   randomBgColor();

   if(idx > testimonials.length - 1) {
       idx = 0;
   }
}

setInterval(updateTestimonail, 10000);

function randomBgColor() {
    var x = Math.floor(Math.random() * 250);
    var z = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 175);

    var bgColor = "rgb(" + x + "," + y + "," + z +")";
    console.log(bgColor);

    testimonialsContainer.style.backgroundColor = bgColor;
}
