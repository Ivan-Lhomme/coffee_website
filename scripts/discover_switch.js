document.addEventListener("DOMContentLoaded", () => {
    const switchIdList = ['g', 'm', 'c', 'p'];

    window.discover_switch = function(id) {
        if (document.querySelector(`#${id} div`).hasAttribute("hidden")) {
            for (const switchId of switchIdList) {
                const switchLine = document.querySelector(`#${switchId} div`);
                const switchImges = document.querySelector(`#${switchId}_img`);

                if (switchId === id) {
                    switchLine.removeAttribute("hidden");
                    if (switchImges) switchImges.removeAttribute("hidden");
                } else {
                    switchLine.setAttribute("hidden", true);
                    if (switchImges) switchImges.setAttribute("hidden", true);
                }
            }
        }
    }
});