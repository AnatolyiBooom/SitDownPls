
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catalog__btn-item').forEach(function (btnStep) {
    btnStep.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path
        console.log(path)

        document.querySelectorAll('.catalog__btn-item').forEach(function (tabContent) {
            tabContent.classList.remove('catalog__btn-active')
        })
        this.classList.add('catalog__btn-active')

        document.querySelectorAll('.catalog__btn-item').forEach(function (tabContent) {
            tabContent.classList.remove('catalog__btn-active')
        })
        this.classList.add('catalog__btn-active')

        document.querySelectorAll('.catalog__list ').forEach(function (tabContent) {
            tabContent.classList.remove('catalog__list-active')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__list-active')
    })
});

  const validation = new JustValidate('#formInput', {
    errorLabelStyle: {
      color: '#FF6F6F',
      borderColor: 'red'
    }
  })


  validation.addField("#username", [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 символа'
    }
  ])

  validation.addField("#userphone", [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },

  ])

  validation.addField("#userEmail", [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат'
    },

  ]);

  validation.addField("#usercheck", [
    {
      rule: 'required',
      errorMessage: 'Примите соглашение'
    },

  ]);

})

var swiper = new Swiper(".mySwiper",{

  slidesPerView: "auto",
  spaceBetween: 19.5,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },

});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.catalog__btn-item').forEach(function (btnStep) {
        btnStep.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.catalog__btn-item').forEach(function (tabContent) {
                tabContent.classList.remove('catalog__btn-active')
            })
            this.classList.add('catalog__btn-active')

            document.querySelectorAll('.catalog__btn-item').forEach(function (tabContent) {
                tabContent.classList.remove('catalog__btn-active')
            })
            this.classList.add('catalog__btn-active')

            document.querySelectorAll('.catalog__list ').forEach(function (tabContent) {
                tabContent.classList.remove('catalog__list-active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__list-active')
        })
    });
})