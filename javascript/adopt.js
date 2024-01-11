function openAdoptionForm(dogName) {

    const windowWidth = 600;
    const windowHeight = 700;

    const windowLeft = (window.screen.width - windowWidth) / 2;
    const windowTop = (window.screen.height - windowHeight) / 2;

    const adoptionFormUrl = `adoption_form.html?dogName=${encodeURIComponent(dogName)}`;
    window.open(adoptionFormUrl, '_blank', `width=${windowWidth}, height=${windowHeight}, left=${windowLeft}, top=${windowTop}`);
}
