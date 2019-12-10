(function parallax() {
    const Parallax = {
        init() {
            document.documentElement.classList.add('js-enabled');
            this.parallax = document.querySelector(".parallax");
            Parallax.addEventListeners();
        },
        addEventListeners() {
            window.addEventListener("scroll", () => {

                this.scrollHeight = window.pageYOffset;
                this.limit = this.parallax.offsetTop + this.parallax.offsetHeight;

                if (this.scrollHeight <= this.limit) {
                    this.parallax.style.backgroundPositionY = (this.scrollHeight - this.parallax.offsetTop) + "px";
                    console.log(this.parallax.style.backgroundPositionY);
                }
            });
        }
    };
    Parallax.init();
}());