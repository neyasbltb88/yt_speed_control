import createReporter from './createReporter';
const reporter = createReporter(process.env.NODE_ENV !== 'development');
import dom from './dom';
import EventEmitter from './EventEmitter';
import isFalse from './isFalse';

export { createReporter, reporter, dom, EventEmitter, isFalse };
