The first idea behind this project was to practice tests and Jest. However, while coding, I started thinking about approaches to dependency inversion, especially around the repository layer.

The repository should be treated as an abstraction rather than a concrete implementation. Instead of having the application logic depend directly on a specific database or ORM, it depends on an interface that defines what operations are needed. The concrete repository then implements that interface.

This approach keeps the business logic independent of infrastructure details, making the code easier to test and allowing the persistence mechanism to be replaced without changing the core application logic.
