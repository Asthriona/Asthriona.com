<template>
    <section>
        <h1 class="text-5xl mt-20">
            Projects
        </h1>
    </section>
    <section>
        <h2 class="text-2xl mt-8">
            Current project
        </h2>
        <p class="text-lg">I'm not currently working on any project.</p>
        
    </section>
    <section>
        <h2 class="text-2xl mt-8">Past projects</h2>
        <p class="text-lg">
            The "past" projects, are project i've been working on in the past. <br>
            I either left the project or closed it down.
        </p>
        <section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
            <div class="card" v-for="project in projects" :key="project.title">
                <div class="max-w-sm p-6 bg-white border border-grey-200 rounded-lg shadow" v-if="project.isActive == false">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {{ project.title }}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700">
                        {{ project.description }}
                    </p>
                    <!-- <a :href="project.url" target="_blank" rel="noopener noreferrer" class="inline-block outline hover:outline-pink-500 outline-offset-4 outline-1 bg-black text-white py-2 px-4 rounded float-right mb-4">Visit</a> -->
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
const projects = [
    {
        title: "Yukiko",
        description: "Yukiko is a powerfull Discord bot that has for goal to be the only bot you'll ever need!",
        url: "https://Yukiko.app",
        isActive: false
    },
    {
        title: "Stellar Bug Tracker",
        description: "The bug tracker for Stellar Corporation.",
        url: "https://stellar-corp.net/",
        isActive: false
    },
    {
        title: "CablePorn",
        description: "A Twitter bot that post the best of r/CablePorn",
        url: "https://twitter.com/CablePorn_/",
        isActive: false
    },
    {
        title: "CableGore",
        description: "A Twitter bot that post the best of r/CableGore for more Anarchy in the Datacenter!",
        url: "https://twitter.com/CableGore/",
        isActive: false
    },
    {
        title: "Galaxy Watch",
        description: "GalaxyWatch is a Stellar Corporation in house tool that is made to gather logs, and review them for better understanding and team-work in our projects.",
        url: "https://Stellar-Corp.net/",
        isActive: false
    },
    {
        title: "Ticket Bot",
        description: "A support tool for Discord, made for Yukiko's support team",
        url: "https://Celestial-Sphere.com/",
        isActive: false
    },
]
</script>