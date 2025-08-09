const $ = (selector) => document.querySelector(selector);

        const hour = $('.hour');
        const dot = $('.dot');
        const min = $('.min');
        const week = $('.week');
        let showDot = true;

        function update() {
            showDot = !showDot;
            const now = new Date();

            // Blink the colon
            dot.classList.toggle('invisible', !showDot);

            // Update hours and minutes
            hour.textContent = String(now.getHours()).padStart(2, '0');
            min.textContent = String(now.getMinutes()).padStart(2, '0');

            // Highlight the current day
            Array.from(week.children).forEach(ele => ele.classList.remove('active'));
            week.children[now.getDay()].classList.add('active');
        }

        // Run once immediately, then every 500ms
        update();
        setInterval(update, 500);