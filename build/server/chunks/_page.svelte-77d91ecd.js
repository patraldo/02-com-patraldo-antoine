import { c as create_ssr_component, b as compute_rest_props, d as set_store_value, f as spread, h as escape_object, i as escape_attribute_value, e as escape, j as add_attribute, a as subscribe, k as assign, n as now, l as loop, o as noop, p as identity } from './index2-07f5b75e.js';
import { w as writable } from './index-064558a8.js';

function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css = {
  code: "parent.svelte-f1hasl{grid-template-columns:1fr 1fr 1.5fr 2fr 8.5fr 2fr 1.5fr 1fr 1fr;grid-template-rows:1fr 1fr 1.5fr 2fr 8.5fr 2fr 1.5fr 1fr 1fr}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gridTemplateColumns;
  let gridTemplateRows;
  let $$restProps = compute_rest_props($$props, ["class", "rows", "cols", "growX", "growY", "duration", "style", "activeClassName"]);
  let $gridTemplateRows, $$unsubscribe_gridTemplateRows = noop, $$subscribe_gridTemplateRows = () => ($$unsubscribe_gridTemplateRows(), $$unsubscribe_gridTemplateRows = subscribe(gridTemplateRows, ($$value) => $gridTemplateRows = $$value), gridTemplateRows);
  let $gridTemplateColumns, $$unsubscribe_gridTemplateColumns = noop, $$subscribe_gridTemplateColumns = () => ($$unsubscribe_gridTemplateColumns(), $$unsubscribe_gridTemplateColumns = subscribe(gridTemplateColumns, ($$value) => $gridTemplateColumns = $$value), gridTemplateColumns);
  let { class: className } = $$props;
  let { rows = 8 } = $$props;
  let { cols = 5 } = $$props;
  let parent;
  let { growX = 2 } = $$props;
  let { growY = 2 } = $$props;
  let { duration = 500 } = $$props;
  let { style = "" } = $$props;
  let { activeClassName = "GridGalleryActiveItem" } = $$props;
  let hoverCol = -1;
  let hoverRow = -1;
  let gridTemplateColumnsStr = "";
  let gridTemplateRowsStr = "";
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.growX === void 0 && $$bindings.growX && growX !== void 0)
    $$bindings.growX(growX);
  if ($$props.growY === void 0 && $$bindings.growY && growY !== void 0)
    $$bindings.growY(growY);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.activeClassName === void 0 && $$bindings.activeClassName && activeClassName !== void 0)
    $$bindings.activeClassName(activeClassName);
  $$result.css.add(css);
  Array(rows * cols);
  $$subscribe_gridTemplateColumns(gridTemplateColumns = tweened(Array(cols).fill(1), { duration, easing: cubicOut }));
  $$subscribe_gridTemplateRows(gridTemplateRows = tweened(Array(rows).fill(1), { duration, easing: cubicOut }));
  {
    {
      let carr = [];
      for (let i = 0; i < cols; i++)
        carr[i] = hoverCol === i ? growX : 1;
      set_store_value(gridTemplateColumns, $gridTemplateColumns = carr, $gridTemplateColumns);
    }
  }
  gridTemplateColumnsStr = $gridTemplateColumns.join("fr ") + "fr";
  {
    {
      let rarr = [];
      for (let i = 0; i < rows; i++)
        rarr[i] = hoverRow === i ? growY : 1;
      set_store_value(gridTemplateRows, $gridTemplateRows = rarr, $gridTemplateRows);
    }
  }
  gridTemplateRowsStr = $gridTemplateRows.join("fr ") + "fr";
  $$unsubscribe_gridTemplateRows();
  $$unsubscribe_gridTemplateColumns();
  return `<parent${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(className) },
      {
        style: "display:grid; grid-template-columns:" + escape(gridTemplateColumnsStr, true) + "; grid-template-rows: " + escape(gridTemplateRowsStr, true) + "; " + escape(style, true)
      }
    ],
    { classes: "svelte-f1hasl" }
  )}${add_attribute("this", parent, 0)}>${slots.default ? slots.default({}) : `
		no content provided
	`}
</parent>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-77d91ecd.js.map
