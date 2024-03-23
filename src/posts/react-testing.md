---
title: WHAT to test in React
description: You probably know how to test React components, but do you know what to test?
date: '2024-04-01'
categories:
  - react
  - nextjs
  - testing
published: true
---

You heard about testing React components with React Testing Library, Jest, and other tools. But do
you know what to test in React components? Most people don't like testing or find it cumbersome,
that is because they don't know what to test.

<br/>

**TL;DR:** Try Test Driven Development (TDD) to understand what to test in React components. Write
tests before writing the actual component code. This will help you understand what to test in
React and keep your tests simple and focused.

<br/>

Example for a TDD approach:

1. Write the test before the component code.
2. Run the test and see it fail.
3. Write the component code to make the test pass.

<br/>

We write the test first to understand what the component should do. This will help us understand
what to test in React components.

```jsx
test('should render the component with the correct text', () => {
	render(<MyComponent />);
	expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
```

So we want a comnponent that renders "Hello, World!". So we should write a React component that
does that.

```jsx
const MyComponent = () => {
	return <div>Hello, World!</div>;
};
```

While this is a simple example, it shows how you can write tests before writing the actual
component code.

<br/>

## What NOT to test in React components

If you are using React Testing Library, you might have seen examples where people test the internal
implementation details of a component. For example, testing the state of a component or the props
passed to a component.

```jsx
test('should render the component with the correct props', () => {
	render(<MyComponent prop1="value1" prop2="value2" />);
	expect(screen.getByText('value1')).toBeInTheDocument();
	expect(screen.getByText('value2')).toBeInTheDocument();
});
```

This is not a good practice because it makes your tests brittle. If you change the internal
implementation of the component, you will have to update the tests as well. This is not what you
want when writing tests.

<br/>

Also, you don't want to test the implementation details of a component (props, state, etc.), you
want to test the
behavior of the component.



<br/>

## What TO test in React components

For DOM testing, you should test the behavior of the component. But for only DOM events, example:
onClick, onChange, etc. You should test the implementation details of the component.

```jsx
test('should call the onClick handler when the button is clicked', () => {
	const onClick = jest.fn();
	render(<MyComponent onClick={onClick} />);
	fireEvent.click(screen.getByRole('button'));
	expect(onClick).toHaveBeenCalledTimes(1);
});
```

Eventually you'll also want to test the "logic" of the component. These might be custom hooks, or
functions that are used in the component.

```jsx
test('should return the correct value from the custom hook', () => {
	const { result } = renderHook(() => useCustomHook());
	expect(result.current).toBe('value');
});
```

<br/>

## Conclusion

When testing React components, you should focus on testing the behavior of the component, not the
implementation details. This will make your tests more robust and less brittle. If you are new to
testing React components, try Test Driven Development (TDD) to understand what to test in React
components.


