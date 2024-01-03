type PathRegistry = Record<string, any>;

export class PathMatcher {
  private registry: PathRegistry;

  constructor() {
    this.registry = {};
  }

  // Register a path with a corresponding handler or data
  registerPath(path: string, handler: any): void {
    this.registry[path] = handler;
  }

  // Match a client request path against the registered paths
  matchPath(requestPath: string): any | undefined {
    const matchingPath = Object.keys(this.registry).find((path) =>
      this.pathMatches(requestPath, path)
    );

    return matchingPath ? this.registry[matchingPath] : undefined;
  }

  // Helper function to check if the request path matches the registered path
  private pathMatches(requestPath: string, registeredPath: string): boolean {
    const requestSegments = requestPath.split("/");
    const registeredSegments = registeredPath.split("/");

    if (requestSegments.length !== registeredSegments.length) {
      return false;
    }

    for (let i = 0; i < requestSegments.length; i++) {
      if (!this.segmentMatches(requestSegments[i], registeredSegments[i])) {
        return false;
      }
    }

    return true;
  }

  private segmentMatches(
    requestSegment: string,
    registeredSegment: string
  ): boolean {
    return registeredSegment.startsWith(":") || registeredSegment === "*"
      ? true
      : requestSegment === registeredSegment;
  }
}
