const config = window.WAGON_CONFIG || {};
if (config.typeformId && /^[a-zA-Z0-9]+$/.test(config.typeformId)) {
 const host = document.querySelector('#typeform-container');
 const frame = document.createElement('iframe');
 frame.title = 'Questionnaire Study Frame';
 frame.src = 'https://form.typeform.com/to/' + config.typeformId;
 host.replaceChildren(frame);
}
// Analytics reste désactivé tant que l’identifiant et le mécanisme de consentement ne sont pas configurés.
