FROM zerocluster/node

RUN \
    # setup node build environment
    curl -fsSL https://raw.githubusercontent.com/softvisio/scripts/main/env-build-node.sh | /bin/bash -s -- setup \
    \
    # install deps
    && npm i --omit=dev \
    \
    # build app
    && pushd app \
    && npm i \
    && npm run build \
    && rm -rf .[!.]* !(www) \
    && popd \
    \
    # cleanup node build environment
    && curl -fsSL https://raw.githubusercontent.com/softvisio/scripts/main/env-build-node.sh | /bin/bash -s -- cleanup
