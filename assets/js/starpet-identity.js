
const identitySteps = {
  user: {
    kicker: 'Checkpoint 01',
    title: 'User symptom',
    copy: 'A reset is not proven until the user can authenticate through the path they actually use.'
  },
  rodc: {
    kicker: 'Checkpoint 02',
    title: 'Local authentication path',
    copy: 'The local RODC can authenticate cached/read-only state, but it cannot directly commit a password write.'
  },
  writable: {
    kicker: 'Checkpoint 03',
    title: 'Writable-DC discovery',
    copy: 'Site-scoped writable discovery failed even though a remote writable controller was discoverable outside the site.'
  },
  return: {
    kicker: 'Checkpoint 04',
    title: 'Replication and stale state',
    copy: 'The new credential still has to return through a clean replication and locator topology. Stale former-DC state made that path suspect.'
  },
  cloud: {
    kicker: 'Checkpoint 05',
    title: 'User-visible validation',
    copy: 'The test is complete only when Windows sign-in and dependent Microsoft 365 applications reflect the expected credential state.'
  }
};

const pathRoot = document.querySelector('[data-identity-path]');
const detailRoot = document.querySelector('[data-step-detail]');

if (pathRoot && detailRoot) {
  const title = detailRoot.querySelector('[data-step-title]');
  const copy = detailRoot.querySelector('[data-step-copy]');
  const kicker = detailRoot.querySelector('[data-step-kicker]');

  pathRoot.addEventListener('click', (event) => {
    const button = event.target.closest('[data-step]');
    if (!button) return;

    pathRoot.querySelectorAll('[data-step]').forEach((node) => node.classList.remove('is-active'));
    button.classList.add('is-active');

    const step = identitySteps[button.dataset.step];
    if (!step) return;
    kicker.textContent = step.kicker;
    title.textContent = step.title;
    copy.textContent = step.copy;
  });
}
