const switchIdList = ['g', 'm', 'c', 'p', 't'];

function discover_switch(id) {
    let currentSwitchBar = document.querySelector(`#${id} div`);
    let images = document.getElementById(`${id}_img`)

    if (!currentSwitchBar.classList.contains("switch-underbar-active")) {
        for (const switchId of switchIdList) {
            let switchBar = document.querySelector(`#${switchId} div`);
            let oldImages = document.getElementById(`${switchId}_img`);

            if (switchBar.classList.contains("switch-underbar-active")) {
                switchBar.classList.remove("switch-underbar-active");

                if (oldImages) {
                    oldImages.style.display = "none";
                }
                
                break;
            }
        }

        currentSwitchBar.classList.add("switch-underbar-active");
        if (images) {
            images.style.display = "grid";
        }
        
    }
}