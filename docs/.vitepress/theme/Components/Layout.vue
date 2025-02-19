<template>
	<NavBar />
	<div>
		<Sidebar />

		<main
			:class="{
				'm-8': true,
				'md:ml-80': isVisible,
				'mt-22': true,
				'min-h-screen': true,
			}"
		>
			<h1 class="xl:pr-72" v-if="page && page.title" id="top">
				{{ page.title }}
			</h1>
			<Label v-for="tag in tags" :name="tag"> </Label>
			<TOC v-if="showToc" />
			<Content
				:class="{
					'xl:mr-72': showToc,
				}"
			/>

			<div v-if="showEditLink">
				<div class="pt-4" v>
					<a :href="editLink" target="_blank"
						>Edit {{ page.title }} on Github.</a
					>
				</div>
			</div>

			<div v-if="showContributors">
				<h2
					:class="{
						'xl:mr-72': showToc
					}">Contributors</h2>
				<Suspense>
					<template #default>
						<Contributors :mentioned="mentionedContributors" />
					</template>
					<template #fallback>
						<div>
							<span> Loading contributors... </span>
						</div>
					</template>
				</Suspense>
			</div>
			<footer>
				<div>
					Bedrock Wiki by
					<a
						href="https://github.com/Bedrock-OSS"
						target="_blank"
						rel="noopener noreferrer"
						>Bedrock-OSS</a
					>. 
				</div>
				<div>
					"Minecraft" is a trademark of Mojang AB. Bedrock-OSS,
					Bedrock Wiki and
					<a
						href="https://bedrock.dev"
						target="_blank"
						rel="noopener noreferrer"
						>bedrock.dev</a
					>
					are not affiliated in any way with Microsoft or Mojang AB.
				</div>
				<ul>
					<!-- <li>
						<a href="#" target="_blank" rel="noopener noreferrer"
							>Privacy Policy</a
						>
					</li> -->
					<li>
						<a href="/discord.html" target="_blank" rel="noopener noreferrer"
							>Join our Discord!</a
						>
					</li>
					<li>
						<a href="https://github.com/Bedrock-OSS" target="_blank" rel="noopener noreferrer"
							>Visit our Project Repository!</a
						>
					</li>
					<li>
						<a href="/contribute.html" target="_blank" rel="noopener norefferer">
							Learn how to contribute!
						</a>
					</li>
				</ul>
			</footer>
		</main>
	</div>
</template>

<script setup lang="ts">
import {
	computed,
	reactive,
	watchEffect,
	onMounted,
	defineAsyncComponent,
} from 'vue'
import TOC from './Content/TOC.vue'
import Sidebar from './Sidebar/Sidebar.vue'
import NavBar from './Navigation/NavBar.vue'
import { useSidebarState } from '../Composables/sidebar'
import { useData, useRoute } from 'vitepress'
import Label from './Content/Label.vue'

const Contributors = defineAsyncComponent(
	() => import('./Content/Contributors.vue')
)

const route = useRoute()
const { page } = useData()
const { toggle, isVisible } = useSidebarState()

const routeData = computed(() => {
	if (route?.data) return route?.data

	// Hack for error from navLinks when visiting 404 page
	// We are manually populating the route.data object with data that fits to the 404 page
	// @ts-ignore
	route.data = {
		frontmatter: {
			title: '404',
			relativePath: '/404.md',
			show_contributors: false,
			show_toc: false,
		},
	}
	return route.data
})

// Default toc to true
const showToc = computed(() => routeData.value.frontmatter.show_toc ?? true)

const showContributors = computed(
	() => routeData.value.frontmatter.show_contributors ?? true
)

const showEditLink = computed(
	() => routeData.value.frontmatter.show_edit_link ?? true
)

const mentionedContributors = computed(
	() => routeData.value.frontmatter.mention ?? []
)

const tags = computed(() => routeData.value.frontmatter.tags ?? [])

const editLink = computed(
	() =>
		'https://github.com/Bedrock-OSS/bedrock-wiki/blob/wiki/docs/' +
		routeData.value.relativePath
)
</script>

<style scoped>
details summary::-webkit-details-marker {
	display: none;
}
</style>
