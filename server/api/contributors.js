export default defineEventHandler(async (event) => {
    const response = await fetch('https://api.github.com/repos/Asthriona/Asthriona.com/contributors');
    const data = await response.json();

    // Filter out the bots
    return data.filter(contributor => 
        contributor.login !== 'dependabot[bot]' && contributor.login !== 'snyk-bot'
    );
});