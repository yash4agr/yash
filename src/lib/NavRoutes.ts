import { base } from '$app/paths';
const routes = [
	{
		href: {base}+'/',
		label: 'Home'
	},
	{
		href: {base}+'/projects',
		label: 'Projects'
	},
	{
		href: {base}+'/about',
		label: 'About'
	},
	// {
	// 	href: '/blog',
	// 	label: 'Blog'
	// },
	{
		href: {base}+'/resume.pdf',
		label: 'Resume'
	}
];

export default routes;
