FROM zerocluster/node

RUN \
    # install deps
    npm i --omit=dev \
    \
    # build app
    && pushd app \
    && NODE_ENV= npm i \
    && npm run build \
    && mv www /tmp && rm -rf * && mv /tmp/www . \
    && popd \
    \
    # cleanup
    && curl -fsSL https://raw.githubusercontent.com/softvisio/scripts/main/env-build-node.sh | /bin/bash -s -- cleanup
