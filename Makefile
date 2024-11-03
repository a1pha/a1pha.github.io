install:
	bundle config set --local path vendor/bundle
	bundle install

upgrade:
	bundle update

test-local:
	bundle exec jekyll serve --trace --livereload