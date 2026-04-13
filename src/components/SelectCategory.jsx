import { useEffect, useState } from "react";

function SelectCategory({ register, errors, setValue, initialCategory, newCategory, setNewCategory, isOpen, categories }) {
  const [mostrarInput, setMostrarInput] = useState(false);

  useEffect(() => {
    if (initialCategory && categories?.length > 0) {
      const catFound = categories.find((cat) => cat.name === initialCategory);
      if (catFound) {
        setValue("category", initialCategory);
        setNewCategory("");
      } else {
        setMostrarInput(true);
        setValue("category", initialCategory);
        setNewCategory(initialCategory);
      }
    }
  }, [initialCategory, categories, setValue, setNewCategory]);

  useEffect(() => {
    if (!isOpen) {
      setMostrarInput(false);
      setValue("category", "");
      setNewCategory("");
    }
  }, [isOpen])

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "otra") {
      setMostrarInput(true);
      setValue("category", "");
      setNewCategory("");
    } else {
      setMostrarInput(false);
      setValue("category", value);
      setNewCategory("");
    }
  };

  return (
    <div className="flex gap-2 col-span-2">
      <div className="flex flex-col gap-1">
        <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="stock">Categoaria</label>
        <select
          name="category"
          {...register("category")}
          onChange={handleChange}
          className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm"
        >
          <option value="">Selecionar una categoria</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
          <option value="otra">Otra...</option>
        </select>
      </div>

      {mostrarInput && (
          <div className="relative w-full self-end">
            <input
              {...register('category', {required: true})}
              type="text"
              placeholder="Escribe nueva categoría"
              className="w-full bg-surface-high rounded-xl py-2 px-4 h-fit font-medium text-sm"
              value={newCategory}
              onChange={(e) => {
                setNewCategory(e.target.value);
                setValue("category", e.target.value, { shouldValidate: true, shouldDirty: true });
              }}
            />
          </div>
      )}

      {errors.category && <p className="text-red-500 text-sm mt-2">{errors.category.message}</p>}
    </div>
  );
}

export default SelectCategory;