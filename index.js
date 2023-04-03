const client = (() => {
    let serviceWorker = undefined;
    const notificationbutton = document.getElementById("btn-notify");

    const showNotificationButton = () => {
        notificationbutton.style.display = "block";
    }

    /*
    const checkNotificationSupport = () => {
        return Promise.reject("notification support not checked.")
    }
    */

    const checkNotificationSupport = () => {
        if(!('Notification' in window)){
            return Promise.reject("This browser doesn't support notifications.")
        }
        console.log("The browser supports notifications")
        return Promise.resolve("Ok!");
    }

    /*
    const registerServiceWorker = () => {
        return Promise.reject("service worker not registered yet")
    }
    */

    const registerServiceWorker = () => {
        if(!('serviceWorker') in navigator) {
            return Promise.reject("service worker is not available")
        }
        
        return navigator.serviceWorker.register('service-worker.js')
        .then(regObj => {
            console.log("service worker is registered successfully!");
            serviceWorkerRegObj = regObj;
            showNotificationButton();
        })
    }

    const requestNotificationPremissions = () => {
        return Notification.requestPermission(status => {
            console.log("Notifications Permission Status:", status);
        })
    }

    checkNotificationSupport()
        .then(registerServiceWorker)
        .then(requestNotificationPremissions)
        .catch(err => console.error(err))
})()