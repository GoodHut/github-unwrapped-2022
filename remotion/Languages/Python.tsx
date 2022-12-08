import React, {SVGProps} from 'react';
import {RoughPath} from '../RoughPath';

export const Python: React.FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 28 28"
			viewBox="0 0 28 28"
			{...props}
		>
			<RoughPath
				fill="#fff"
				d="M21.267,21.5h-14.2c-2.338,0-4.233-1.895-4.233-4.233v-4.283c0-2.338,1.895-4.233,4.233-4.233h14.2c2.338,0,4.233,1.895,4.233,4.233v4.283C25.5,19.605,23.605,21.5,21.267,21.5z"
			/>
			<path
				fill="#ffd63b"
				d="M7,20H5.8c-1.704,0-2.912-1.121-3.402-3.156c-0.534-2.229-0.534-3.586,0-5.81C2.853,9.135,4.317,8,6.314,8h2.059c-0.276,0-0.5-0.224-0.5-0.5V5.579c0-1.766,0.516-2.88,3.155-3.346c1.742-0.309,3.802-0.312,5.65-0.006C18.393,2.517,19.5,3.83,19.5,5.575v5.231c0,1.737-1.031,2.693-2.904,2.693h-5.482c-1.667,0-3.614,0.918-3.614,3.504V19.5C7.5,19.776,7.276,20,7,20z M6.314,9c-1.525,0-2.598,0.826-2.943,2.268c-0.498,2.069-0.498,3.268,0,5.343C3.633,17.7,4.268,19,5.8,19h0.7v-1.996c0-3.111,2.317-4.504,4.614-4.504h5.482c1.334,0,1.904-0.507,1.904-1.693V5.575c0-1.25-0.761-2.155-1.987-2.361c-1.74-0.286-3.676-0.286-5.312,0.005c-2.099,0.37-2.328,1.035-2.328,2.36V7h4.989c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5H6.314z"
			/>
			<path
				fill="#ffd63b"
				d="M11.5 6.525c-.827 0-1.5-.678-1.5-1.511C10.008 4.178 10.681 3.5 11.5 3.5c.827 0 1.5.68 1.5 1.515C13 5.848 12.327 6.525 11.5 6.525zM11.5 4.5c-.278 0-.497.229-.5.52 0 .276.224.506.5.506S12 5.296 12 5.015C12 4.735 11.771 4.5 11.5 4.5zM14.168 26c-.958 0-1.928-.075-2.846-.228C9.607 25.483 8.5 24.17 8.5 22.425v-5.231c0-1.737 1.031-2.693 2.904-2.693h5.482c1.667 0 3.614-.918 3.614-3.504V8.5C20.5 8.224 20.724 8 21 8h1.2c1.704 0 2.912 1.121 3.402 3.156.534 2.229.534 3.586 0 5.81C25.147 18.865 23.683 20 21.686 20h-7.048 4.989c.276 0 .5.224.5.5v1.921c0 1.766-.516 2.88-3.155 3.346C16.095 25.922 15.138 26 14.168 26zM11.404 15.5c-1.334 0-1.904.507-1.904 1.693v5.231c0 1.25.761 2.155 1.987 2.361 1.74.287 3.676.286 5.312-.005 2.099-.37 2.328-1.035 2.328-2.36V21h-4.989c-.276 0-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5h7.548c1.525 0 2.598-.826 2.943-2.268.498-2.069.498-3.268 0-5.343C24.367 10.3 23.732 9 22.2 9h-.7v1.996c0 3.111-2.317 4.504-4.614 4.504H11.404z"
			/>
			<path
				fill="#ffd63b"
				d="M16.5,24.5c-0.827,0-1.5-0.68-1.5-1.515c0-0.833,0.673-1.511,1.5-1.511s1.5,0.678,1.5,1.511C17.992,23.822,17.319,24.5,16.5,24.5z M16.5,22.475c-0.276,0-0.5,0.229-0.5,0.511c0,0.279,0.229,0.515,0.5,0.515c0.278,0,0.497-0.229,0.5-0.52C17,22.704,16.776,22.475,16.5,22.475z"
			/>
		</svg>
	);
};
