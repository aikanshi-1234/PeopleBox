const { jobPostings } = require('../data/data');

function getRecommendations(userData) {
    const recommendations = [];
    jobPostings.forEach((job) => {
        let score = 0;
        const matchingSkills = userData.skills.filter(skill => job.required_skills.includes(skill));
        score += 5 * matchingSkills.length;
        if (userData.preferences.locations.includes(job.location)) {
            score += 10;
        }
        if (job.experience_level === userData.experience_level) {
            score += 7;
        }
        if (score > 10) {
            recommendations.push({
                job_title: job.job_title,
                company: job.company,
                location: job.location,
                job_type: job.job_type,
                required_skills: job.required_skills,
                experience_level: job.experience_level,
            });
        }
    });
    return recommendations;
}

module.exports = { getRecommendations };
