Promises against Callbacks
==========================

This repository shows step by step what are the hazards of using callbacks insteado fo promises.

> by @drpicox



Roadmap
-------

### 1. First implementation

It simulates a remote petition in `httpBook` throgh timeout using callbacks.

It also has two views: 
- one for overview and 
- another for details

PROBLEM: there are two remote requests.

```
[http-book1] remote get simulating...
[http-book1] remote get simulated.
[http-book1] remote get simulating...
[http-book1] remote get simulated.
```

> Branches: step1


### 2. Save the value

Modify `httpBook` to save the book value so it is not double loaded

PROBLEM: race condition, double load if you ask again too fast

```
[http-book2] remote get simulating...
[http-book2] remote get simulating...
[http-book2] remote get simulated.
[http-book2] remote get simulated.
```

> Branches: step2


### 3. Add a cb queue

Modify `httpBook` to save all callbacks active while requesting, and then resolve all.

PROBLEM: race condition, some times works if we asume it is already loaded

```javascript
/* @ngInject */ function BookDetailsController(httpBook) {
    var book;

    httpBook.get(function(newBook) { book = newBook; });
    this.book = book;
}
```

```
Author: ???
Pages: ???
ISBN: ???
```

> Branches: step3, step3p


### 4. Add a next tick

Modify `httpBook` to execute in the nextTick.

PROBLEM: what if cb is undefined? (ex: for warm up)

```javascript
// warmup
.run(function(httpBook) { httpBook.get(); })
```

```
[http-book4] remote get simulating...
[http-book4] remote get simulated.
TypeError: aCb is not a function
    at HttpBook.factory.js:18
    at angular.js:18132
    at completeOutstandingRequest (angular.js:5729)
    at angular.js:6006
```

> Branches: step4, step4p


### 5. Empty callbacks

Modify `httpBook` to use noop when cb is falsy. Note $digest, do once when processing queue.

PROBLEM: what if cb throws an exception?

```javascript
// simulate illegal op
.run(function(httpBook) { httpBook.get(function(book) {book.countPages();}); })
```

> Branches: step5, step5p


### 6. Handle exceptions

Modify `httpBook` to handle exceptions using `$exceptionHandler`.

PROBLEM: try to understand resulting code

> Branches: step6


### 7. Use promises

Modify `httpBook`, `BookDetails` and `BookOverview` to use promises.

> Branches: step7


Summary
-------

The overall problem of using cb is the mix of responsabilities.
There was four responsabilities:

1. obtain remote data
2. manage results
3. handle asynchronous behaviour
4. handle exceptions

With callbacks `httpBook` handles four responsabilities at once. But only responsabilities 1 and 2 are direct business of `httpBook`. With promises we delegate responsabilities 3 and 4 to the Promise itself, allowing `httpBook` focus in its own logic.

A plus should be split `httpBook` in two services: one to obtain remote data, another to manage results.



Quickstart
----------

```bash
$ npm start
```

Setup
-----

Once yo have cloned the repository, install node modules:

```bash
$ npm run setup
```


Build
-----

Build app to deploy:

```bash
$ npm run build
```


Developer environment
---------------------

Start developer environment:

```bash
$ npm run serve
```

Re-Synchronize the scaffold
---------------------------

If scaffold improves, you can update your project as follows:

   ```bash
   $ git remote add scaffold https://github.com/drpicox/angular1-scaffold.git
   $ git pull scaffold master
   $ git remote remove scaffold
   ```
